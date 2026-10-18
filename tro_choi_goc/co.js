/* Trò chơi cờ – Kế toán Thái Sơn. Cờ tướng, cờ vua, cờ caro, cờ đam; chơi với máy hoặc hai người. */
"use strict";

const ngauNhien = (a) => a[Math.floor(Math.random() * a.length)];

/* Tìm nước đi bằng negamax + cắt tỉa alpha-beta. G cung cấp legal, apply, evalSide, ketThuc. */
function timNuoc(G, st, sau, ngauNhienTop) {
  function tim(s, d, a, b, ply) {
    const ms = G.legal(s);
    if (!ms.length) return G.diemHetNuoc(s, ply);
    if (d === 0) return G.evalSide(s);
    G.sapXep && G.sapXep(ms, s);
    let tot = -Infinity;
    for (const m of ms) {
      const v = -tim(G.apply(s, m), d - 1, -b, -a, ply + 1);
      if (v > tot) tot = v;
      if (v > a) a = v;
      if (a >= b) break;
    }
    return tot;
  }
  const ms = G.legal(st);
  if (!ms.length) return null;
  G.sapXep && G.sapXep(ms, st);
  // Cửa sổ tìm kiếm rộng thêm `bien` dưới nước tốt nhất: mọi nước trong khoảng đó có điểm chính xác,
  // nên chọn ngẫu nhiên trong nhóm này không bao giờ ra nước tồi hơn mức cho phép.
  const bien = ngauNhienTop || 0, kq = [];
  let a = -Infinity;
  for (const m of ms) {
    const v = -tim(G.apply(st, m), sau - 1, -Infinity, -(a - bien) + 1, 1);
    kq.push([v, m]);
    if (v > a) a = v;
  }
  kq.sort((x, y) => y[0] - x[0]);
  return ngauNhien(kq.filter((x) => x[0] >= kq[0][0] - bien))[1];
}

/* ===================================================== CỜ VUA */
const CoVua = (() => {
  const NM = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
  const KM = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const RD = [[-1, 0], [1, 0], [0, -1], [0, 1]], BD = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
  const hoa = (p) => p >= "A" && p <= "Z";
  const VAL = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };
  const PP = [0,0,0,0,0,0,0,0, 50,50,50,50,50,50,50,50, 10,10,20,30,30,20,10,10, 5,5,10,25,25,10,5,5,
    0,0,0,20,20,0,0,0, 5,-5,-10,0,0,-10,-5,5, 5,10,10,-20,-20,10,10,5, 0,0,0,0,0,0,0,0];
  const giua = (s) => 7 - Math.abs((s >> 3) - 3.5) - Math.abs((s & 7) - 3.5);
  const ttrong = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
  const KY = { k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟" };

  function init() {
    return { b: ("rnbqkbnr" + "pppppppp" + "........".repeat(4) + "PPPPPPPP" + "RNBQKBNR").split(""),
      t: "w", cr: { K: 1, Q: 1, k: 1, q: 1 }, ep: -1, last: null, hm: 0 };
  }

  function biTanCong(b, s, boiTrang) {
    const r = s >> 3, c = s & 7;
    const pr = boiTrang ? r + 1 : r - 1;
    if (pr >= 0 && pr < 8) for (const dc of [-1, 1]) {
      const cc = c + dc;
      if (cc >= 0 && cc < 8 && b[pr * 8 + cc] === (boiTrang ? "P" : "p")) return true;
    }
    for (const [dr, dc] of NM) if (ttrong(r + dr, c + dc) && b[(r + dr) * 8 + c + dc] === (boiTrang ? "N" : "n")) return true;
    for (const [dr, dc] of KM) if (ttrong(r + dr, c + dc) && b[(r + dr) * 8 + c + dc] === (boiTrang ? "K" : "k")) return true;
    for (const [ds, loai] of [[RD, "rq"], [BD, "bq"]]) for (const [dr, dc] of ds) {
      let rr = r + dr, cc = c + dc;
      while (ttrong(rr, cc)) {
        const x = b[rr * 8 + cc];
        if (x !== ".") { if (hoa(x) === boiTrang && loai.includes(x.toLowerCase())) return true; break; }
        rr += dr; cc += dc;
      }
    }
    return false;
  }

  function pseudo(st) {
    const b = st.b, w = st.t === "w", ms = [];
    const dich = (x) => x !== "." && hoa(x) !== w;
    for (let s = 0; s < 64; s++) {
      const p = b[s];
      if (p === "." || hoa(p) !== w) continue;
      const r = s >> 3, c = s & 7, P = p.toLowerCase();
      const them = (t, x) => ms.push(Object.assign({ f: s, t }, x || {}));
      const tot = (t) => { if ((t >> 3) === 0 || (t >> 3) === 7) for (const pr of "qrbn") them(t, { promo: pr }); else them(t); };
      if (P === "p") {
        const d = w ? -1 : 1, r1 = r + d;
        if (r1 < 0 || r1 > 7) continue;
        if (b[r1 * 8 + c] === ".") {
          tot(r1 * 8 + c);
          if (r === (w ? 6 : 1) && b[(r + 2 * d) * 8 + c] === ".") them((r + 2 * d) * 8 + c, { dbl: 1 });
        }
        for (const dc of [-1, 1]) {
          const cc = c + dc;
          if (cc < 0 || cc > 7) continue;
          const t = r1 * 8 + cc;
          if (dich(b[t])) tot(t); else if (t === st.ep) them(t, { ep: 1 });
        }
      } else if (P === "n" || P === "k") {
        for (const [dr, dc] of P === "n" ? NM : KM) {
          if (!ttrong(r + dr, c + dc)) continue;
          const t = (r + dr) * 8 + c + dc;
          if (b[t] === "." || dich(b[t])) them(t);
        }
        if (P === "k") {
          const g = w ? 60 : 4, X = w ? "R" : "r", dch = !w;
          if (s === g && (w ? st.cr.K : st.cr.k) && b[g + 1] === "." && b[g + 2] === "." && b[g + 3] === X &&
              !biTanCong(b, g, dch) && !biTanCong(b, g + 1, dch) && !biTanCong(b, g + 2, dch)) them(g + 2, { cs: 1 });
          if (s === g && (w ? st.cr.Q : st.cr.q) && b[g - 1] === "." && b[g - 2] === "." && b[g - 3] === "." && b[g - 4] === X &&
              !biTanCong(b, g, dch) && !biTanCong(b, g - 1, dch) && !biTanCong(b, g - 2, dch)) them(g - 2, { cs: 1 });
        }
      } else {
        for (const [dr, dc] of P === "r" ? RD : P === "b" ? BD : KM) {
          let rr = r + dr, cc = c + dc;
          while (ttrong(rr, cc)) {
            const t = rr * 8 + cc;
            if (b[t] === ".") them(t);
            else { if (dich(b[t])) them(t); break; }
            rr += dr; cc += dc;
          }
        }
      }
    }
    return ms;
  }

  function apply(st, m) {
    const b = st.b.slice(), w = st.t === "w", p = b[m.f], an = b[m.t] !== "." || m.ep;
    b[m.t] = m.promo ? (w ? m.promo.toUpperCase() : m.promo) : p;
    b[m.f] = ".";
    if (m.ep) b[m.t + (w ? 8 : -8)] = ".";
    if (m.cs) {
      const xe = { 62: [63, 61], 58: [56, 59], 6: [7, 5], 2: [0, 3] }[m.t];
      b[xe[1]] = b[xe[0]]; b[xe[0]] = ".";
    }
    const cr = Object.assign({}, st.cr);
    if (p === "K") cr.K = cr.Q = 0;
    if (p === "k") cr.k = cr.q = 0;
    for (const [o, k] of [[63, "K"], [56, "Q"], [7, "k"], [0, "q"]]) if (m.f === o || m.t === o) cr[k] = 0;
    return { b, t: w ? "b" : "w", cr, ep: m.dbl ? (m.f + m.t) / 2 : -1, last: [m.f, m.t],
      hm: an || p.toLowerCase() === "p" ? 0 : st.hm + 1 };
  }

  const vua = (b, w) => b.indexOf(w ? "K" : "k");
  const biChieu = (st) => biTanCong(st.b, vua(st.b, st.t === "w"), st.t !== "w");
  function legal(st) {
    const w = st.t === "w";
    return pseudo(st).filter((m) => { const n = apply(st, m); return !biTanCong(n.b, vua(n.b, w), !w); });
  }

  function evalTrang(b) {
    let s = 0;
    for (let i = 0; i < 64; i++) {
      const p = b[i];
      if (p === ".") continue;
      const P = p.toLowerCase(), w = hoa(p), j = w ? i : i ^ 56;
      let v = VAL[P] + (P === "p" ? PP[j] : P === "k" ? 0 : giua(i) * (P === "n" ? 5 : 2));
      s += w ? v : -v;
    }
    return s;
  }

  function thieuQuan(b) {
    const q = b.filter((x) => x !== "." && x.toLowerCase() !== "k");
    return q.length === 0 || (q.length === 1 && "bnBN".includes(q[0]));
  }

  return {
    ten: "Cờ vua", ben: ["w", "b"], tenBen: { w: "Trắng", b: "Đen" }, cot: 8, hang: 8,
    init, legal, apply,
    evalSide: (st) => (st.t === "w" ? 1 : -1) * evalTrang(st.b),
    diemHetNuoc: (st, ply) => (biChieu(st) ? -100000 + ply : 0),
    sapXep: (ms, st) => ms.sort((a, b) => (st.b[b.t] === "." ? 0 : VAL[st.b[b.t].toLowerCase()]) + (b.promo ? 800 : 0)
      - (st.b[a.t] === "." ? 0 : VAL[st.b[a.t].toLowerCase()]) - (a.promo ? 800 : 0)),
    ai(st, muc) { return timNuoc(this, st, [1, 3, 4][muc - 1], muc === 1 ? 60 : 8); },
    ketThuc(st) {
      if (thieuQuan(st.b)) return { hoa: true, chu: "Hòa: không đủ quân chiếu hết." };
      if (st.hm >= 100) return { hoa: true, chu: "Hòa: 50 nước không ăn quân, không đi tốt." };
      if (legal(st).length) return null;
      if (biChieu(st)) return { thang: st.t === "w" ? "b" : "w", chu: (st.t === "w" ? "Đen" : "Trắng") + " thắng: chiếu hết!" };
      return { hoa: true, chu: "Hòa: hết nước đi (pat)." };
    },
    canhBao: (st) => (biChieu(st) ? "Đang bị chiếu!" : ""),
    ve(ctx, W, H, st, ui) {
      const o = W / 8;
      const chieu = biChieu(st) ? vua(st.b, st.t === "w") : -1;
      for (let s = 0; s < 64; s++) {
        const r = s >> 3, c = s & 7;
        ctx.fillStyle = (r + c) % 2 ? "#b58863" : "#f0d9b5";
        if (st.last && st.last.includes(s)) ctx.fillStyle = (r + c) % 2 ? "#aaa23a" : "#cdd26a";
        if (s === ui.sel) ctx.fillStyle = "#7fb069";
        if (s === chieu) ctx.fillStyle = "#e05a4f";
        ctx.fillRect(c * o, r * o, o, o);
      }
      ctx.font = `${o * 0.16}px sans-serif`;
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = i % 2 ? "#f0d9b5" : "#b58863";
        ctx.fillText("abcdefgh"[i], i * o + o * 0.82, H - o * 0.06);
        ctx.fillStyle = i % 2 ? "#b58863" : "#f0d9b5";
        ctx.fillText(8 - i, o * 0.04, i * o + o * 0.2);
      }
      for (let s = 0; s < 64; s++) if (st.b[s] !== ".") this.veQuan(ctx, st.b[s], (s & 7) * o + o / 2, (s >> 3) * o + o / 2, o);
      for (const t of ui.dich) {
        ctx.fillStyle = "rgba(20,48,90,.35)";
        ctx.beginPath();
        ctx.arc((t & 7) * o + o / 2, (t >> 3) * o + o / 2, st.b[t] === "." ? o * 0.15 : o * 0.45, 0, 7);
        st.b[t] === "." ? ctx.fill() : (ctx.lineWidth = o * 0.07, ctx.strokeStyle = "rgba(20,48,90,.45)", ctx.stroke());
      }
    },
    veQuan(ctx, p, x, y, o) {
      const g = KY[p.toLowerCase()] + "︎";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = `${o * 0.78}px "Segoe UI Symbol","Noto Sans Symbols 2","DejaVu Sans",serif`;
      ctx.lineWidth = o * 0.05; ctx.strokeStyle = hoa(p) ? "#222" : "#ddd";
      ctx.strokeText(g, x, y + o * 0.04);
      ctx.fillStyle = hoa(p) ? "#fff" : "#111";
      ctx.fillText(g, x, y + o * 0.04);
      ctx.textAlign = "start"; ctx.textBaseline = "alphabetic";
    },
    o: (W) => W / 8,
    toaDo: (x, y, W) => { const o = W / 8, c = Math.floor(x / o), r = Math.floor(y / o); return ttrong(r, c) ? r * 8 + c : -1; },
    tiLe: 1,
  };
})();

/* ===================================================== CỜ TƯỚNG */
const CoTuong = (() => {
  const ttrong = (r, c) => r >= 0 && r < 10 && c >= 0 && c < 9;
  const hoa = (p) => p >= "A" && p <= "Z";
  const trongCung = (r, c, do_) => (do_ ? r >= 7 : r <= 2) && c >= 3 && c <= 5;
  const MA = [[-2, -1, -1, 0], [-2, 1, -1, 0], [2, -1, 1, 0], [2, 1, 1, 0], [-1, -2, 0, -1], [-1, 2, 0, 1], [1, -2, 0, -1], [1, 2, 0, 1]];
  const D4 = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const VAL = { k: 10000, a: 120, b: 120, n: 270, r: 600, c: 285, p: 30 };
  const TEN = { R: "車", N: "馬", B: "相", A: "仕", K: "帥", C: "炮", P: "兵", r: "車", n: "馬", b: "象", a: "士", k: "將", c: "砲", p: "卒" };

  function init() {
    return { b: ("rnbakabnr" + "........." + ".c.....c." + "p.p.p.p.p" + "........." + "........." +
      "P.P.P.P.P" + ".C.....C." + "........." + "RNBAKABNR").split(""), t: "r", last: null, hm: 0 };
  }

  function pseudo(st) {
    const b = st.b, doLuot = st.t === "r", ms = [];
    for (let s = 0; s < 90; s++) {
      const p = b[s];
      if (p === "." || hoa(p) !== doLuot) continue;
      const r = Math.floor(s / 9), c = s % 9, P = p.toLowerCase();
      const duoc = (rr, cc) => ttrong(rr, cc) && (b[rr * 9 + cc] === "." || hoa(b[rr * 9 + cc]) !== doLuot);
      const them = (rr, cc) => ms.push({ f: s, t: rr * 9 + cc });
      if (P === "r" || P === "c") {
        for (const [dr, dc] of D4) {
          let rr = r + dr, cc = c + dc, nhay = false;
          while (ttrong(rr, cc)) {
            const x = b[rr * 9 + cc];
            if (P === "r") {
              if (x === ".") them(rr, cc); else { if (hoa(x) !== doLuot) them(rr, cc); break; }
            } else if (!nhay) {
              if (x === ".") them(rr, cc); else nhay = true;
            } else if (x !== ".") { if (hoa(x) !== doLuot) them(rr, cc); break; }
            rr += dr; cc += dc;
          }
        }
      } else if (P === "n") {
        for (const [dr, dc, lr, lc] of MA) if (ttrong(r + lr, c + lc) && b[(r + lr) * 9 + c + lc] === "." && duoc(r + dr, c + dc)) them(r + dr, c + dc);
      } else if (P === "b") {
        for (const [dr, dc] of [[-2, -2], [-2, 2], [2, -2], [2, 2]]) {
          const rr = r + dr, cc = c + dc;
          if (!ttrong(rr, cc) || b[(r + dr / 2) * 9 + c + dc / 2] !== "." || (doLuot ? rr < 5 : rr > 4)) continue;
          if (duoc(rr, cc)) them(rr, cc);
        }
      } else if (P === "a" || P === "k") {
        for (const [dr, dc] of P === "a" ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : D4)
          if (trongCung(r + dr, c + dc, doLuot) && duoc(r + dr, c + dc)) them(r + dr, c + dc);
      } else if (P === "p") {
        const f = doLuot ? -1 : 1;
        if (duoc(r + f, c)) them(r + f, c);
        if (doLuot ? r <= 4 : r >= 5) for (const dc of [-1, 1]) if (duoc(r, c + dc)) them(r, c + dc);
      }
    }
    return ms;
  }

  /* Tướng của bên `do_` có bị bên kia uy hiếp không (kể cả lộ mặt tướng). */
  function biChieu(b, do_) {
    const s = b.indexOf(do_ ? "K" : "k");
    if (s < 0) return true;
    const r = Math.floor(s / 9), c = s % 9, dich = (x) => x !== "." && hoa(x) !== do_;
    for (const [dr, dc] of D4) {
      let rr = r + dr, cc = c + dc, man = 0;
      while (ttrong(rr, cc)) {
        const x = b[rr * 9 + cc];
        if (x !== ".") {
          if (man === 0) {
            if (dich(x) && (x.toLowerCase() === "r" || (x.toLowerCase() === "k" && dc === 0))) return true;
            man = 1;
          } else { if (dich(x) && x.toLowerCase() === "c") return true; break; }
        }
        rr += dr; cc += dc;
      }
    }
    for (const [dr, dc, lr, lc] of MA) {
      const hr = r - dr, hc = c - dc;
      if (ttrong(hr, hc) && b[hr * 9 + hc] === (do_ ? "n" : "N") && b[(hr + lr) * 9 + hc + lc] === ".") return true;
    }
    const tot = do_ ? "p" : "P";
    if (ttrong(r + (do_ ? -1 : 1), c) && b[(r + (do_ ? -1 : 1)) * 9 + c] === tot) return true;
    for (const dc of [-1, 1]) if (ttrong(r, c + dc) && b[r * 9 + c + dc] === tot) return true;
    return false;
  }

  function apply(st, m) {
    const b = st.b.slice(), an = b[m.t] !== ".";
    b[m.t] = b[m.f]; b[m.f] = ".";
    return { b, t: st.t === "r" ? "k" : "r", last: [m.f, m.t], hm: an ? 0 : st.hm + 1 };
  }
  const legal = (st) => pseudo(st).filter((m) => !biChieu(apply(st, m).b, st.t === "r"));

  function evalDo(b) {
    let s = 0;
    for (let i = 0; i < 90; i++) {
      const p = b[i];
      if (p === ".") continue;
      const r = Math.floor(i / 9), c = i % 9;
      let v = VAL[p.toLowerCase()];
      if (p === "P") v += (9 - r) * 3 + (r <= 4 ? 20 - Math.abs(c - 4) * 3 : 0);
      if (p === "p") v += r * 3 + (r >= 5 ? 20 - Math.abs(c - 4) * 3 : 0);
      if ("NCnc".includes(p)) v += 6 - Math.abs(c - 4);
      s += hoa(p) ? v : -v;
    }
    return s;
  }

  return {
    ten: "Cờ tướng", ben: ["r", "k"], tenBen: { r: "Đỏ", k: "Đen" }, cot: 9, hang: 10,
    init, legal, apply,
    evalSide: (st) => (st.t === "r" ? 1 : -1) * evalDo(st.b),
    diemHetNuoc: (st, ply) => -100000 + ply,                 // cờ tướng: hết nước đi là thua
    sapXep: (ms, st) => ms.sort((a, b) => (st.b[b.t] === "." ? 0 : VAL[st.b[b.t].toLowerCase()]) - (st.b[a.t] === "." ? 0 : VAL[st.b[a.t].toLowerCase()])),
    ai(st, muc) { return timNuoc(this, st, [1, 3, 4][muc - 1], muc === 1 ? 80 : 5); },
    ketThuc(st) {
      if (st.hm >= 120) return { hoa: true, chu: "Hòa: 60 nước không ăn quân." };
      if (legal(st).length) return null;
      const thua = st.t, thang = thua === "r" ? "k" : "r";
      return { thang, chu: (thang === "r" ? "Đỏ" : "Đen") + (biChieu(st.b, thua === "r") ? " thắng: chiếu bí!" : " thắng: đối phương hết nước đi.") };
    },
    canhBao: (st) => (biChieu(st.b, st.t === "r") ? "Đang bị chiếu tướng!" : ""),
    ve(ctx, W, H, st, ui) {
      const o = W / 9, m = o / 2;
      ctx.fillStyle = "#e9c88f"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "#5b3a1a"; ctx.lineWidth = Math.max(1, o * 0.025);
      const X = (c) => m + c * o, Y = (r) => m + r * o;
      ctx.beginPath();
      for (let r = 0; r < 10; r++) { ctx.moveTo(X(0), Y(r)); ctx.lineTo(X(8), Y(r)); }
      for (let c = 0; c < 9; c++) {
        if (c === 0 || c === 8) { ctx.moveTo(X(c), Y(0)); ctx.lineTo(X(c), Y(9)); }
        else { ctx.moveTo(X(c), Y(0)); ctx.lineTo(X(c), Y(4)); ctx.moveTo(X(c), Y(5)); ctx.lineTo(X(c), Y(9)); }
      }
      for (const r0 of [0, 7]) { ctx.moveTo(X(3), Y(r0)); ctx.lineTo(X(5), Y(r0 + 2)); ctx.moveTo(X(5), Y(r0)); ctx.lineTo(X(3), Y(r0 + 2)); }
      ctx.stroke();
      ctx.fillStyle = "#7a4d22"; ctx.font = `bold ${o * 0.32}px "Be Vietnam Pro",sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("SỞ HÀ", X(2), Y(4.5)); ctx.fillText("HÁN GIỚI", X(6), Y(4.5));
      if (st.last) for (const s of st.last) {
        ctx.strokeStyle = "#2f7d32"; ctx.lineWidth = o * 0.06;
        ctx.strokeRect(X(s % 9) - o * 0.47, Y(Math.floor(s / 9)) - o * 0.47, o * 0.94, o * 0.94);
      }
      ctx.textAlign = "start"; ctx.textBaseline = "alphabetic";
      for (let s = 0; s < 90; s++) if (st.b[s] !== ".") this.veQuan(ctx, st.b[s], X(s % 9), Y(Math.floor(s / 9)), o, s === ui.sel);
      for (const t of ui.dich) {
        ctx.beginPath(); ctx.arc(X(t % 9), Y(Math.floor(t / 9)), st.b[t] === "." ? o * 0.13 : o * 0.47, 0, 7);
        if (st.b[t] === ".") { ctx.fillStyle = "rgba(20,48,90,.45)"; ctx.fill(); }
        else { ctx.strokeStyle = "rgba(47,125,50,.9)"; ctx.lineWidth = o * 0.07; ctx.stroke(); }
      }
    },
    veQuan(ctx, p, x, y, o, chon) {
      const mau = hoa(p) ? "#c0261e" : "#1b1b1b";
      ctx.beginPath(); ctx.arc(x, y, o * 0.44, 0, 7);
      ctx.fillStyle = chon ? "#bfe3a8" : "#fbf1dc"; ctx.fill();
      ctx.lineWidth = o * 0.05; ctx.strokeStyle = mau; ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, o * 0.36, 0, 7); ctx.lineWidth = o * 0.02; ctx.stroke();
      ctx.font = `bold ${o * 0.5}px "Microsoft YaHei","SimSun","Noto Sans CJK SC",serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillStyle = mau; ctx.fillText(TEN[p], x, y + o * 0.02);
      ctx.textAlign = "start"; ctx.textBaseline = "alphabetic";
    },
    o: (W) => W / 9,
    toaDo: (x, y, W) => { const o = W / 9, c = Math.round((x - o / 2) / o), r = Math.round((y - o / 2) / o); return ttrong(r, c) ? r * 9 + c : -1; },
    tiLe: 10 / 9,
  };
})();

/* ===================================================== CỜ ĐAM (luật Anh 8x8: bắt buộc ăn, ăn liên tiếp) */
const CoDam = (() => {
  const ttrong = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
  const cua = (p, ben) => p !== "." && p.toLowerCase() === ben;
  function init() {
    const b = Array(64).fill(".");
    for (let s = 0; s < 64; s++) {
      const r = s >> 3, c = s & 7;
      if ((r + c) % 2 === 1) { if (r < 3) b[s] = "o"; if (r > 4) b[s] = "x"; }
    }
    return { b, t: "x", last: null, hm: 0 };
  }
  function huong(p) { return p === "x" ? [[-1, -1], [-1, 1]] : p === "o" ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1], [1, -1], [1, 1]]; }

  function legal(st) {
    const b = st.b, ben = st.t, an = [], di = [];
    for (let s = 0; s < 64; s++) {
      const p = b[s];
      if (!cua(p, ben)) continue;
      const r = s >> 3, c = s & 7;
      const chuoi = (bb, pos, pp, duong, bat) => {
        const pr = pos >> 3, pc = pos & 7;
        let tiep = false;
        for (const [dr, dc] of huong(pp)) {
          const mr = pr + dr, mc = pc + dc, tr = pr + 2 * dr, tc = pc + 2 * dc;
          if (!ttrong(tr, tc)) continue;
          const giua = bb[mr * 8 + mc];
          if (giua === "." || cua(giua, ben) || bb[tr * 8 + tc] !== ".") continue;
          tiep = true;
          const nb = bb.slice(), t = tr * 8 + tc;
          nb[mr * 8 + mc] = "."; nb[t] = pp; nb[pos] = ".";
          const phong = pp === pp.toLowerCase() && (tr === (ben === "x" ? 0 : 7));
          if (phong) an.push({ f: s, t, duong: duong.concat(t), bat: bat.concat(mr * 8 + mc) });
          else chuoi(nb, t, pp, duong.concat(t), bat.concat(mr * 8 + mc));
        }
        if (!tiep && bat.length) an.push({ f: s, t: pos, duong, bat });
      };
      chuoi(b, s, p, [], []);
      for (const [dr, dc] of huong(p)) if (ttrong(r + dr, c + dc) && b[(r + dr) * 8 + c + dc] === ".") di.push({ f: s, t: (r + dr) * 8 + c + dc, duong: [], bat: [] });
    }
    return an.length ? an : di;
  }
  function apply(st, m) {
    const b = st.b.slice();
    let p = b[m.f];
    b[m.f] = ".";
    for (const x of m.bat) b[x] = ".";
    if (p === "x" && m.t >> 3 === 0) p = "X";
    if (p === "o" && m.t >> 3 === 7) p = "O";
    b[m.t] = p;
    return { b, t: st.t === "x" ? "o" : "x", last: [m.f, m.t], hm: m.bat.length ? 0 : st.hm + 1 };
  }
  function evalX(b) {
    let s = 0;
    for (let i = 0; i < 64; i++) {
      const p = b[i], r = i >> 3;
      if (p === "x") s += 100 + (7 - r) * 4; else if (p === "X") s += 175;
      else if (p === "o") s -= 100 + r * 4; else if (p === "O") s -= 175;
    }
    return s;
  }
  return {
    ten: "Cờ đam", ben: ["x", "o"], tenBen: { x: "Đỏ", o: "Đen" }, cot: 8, hang: 8,
    init, legal, apply,
    evalSide: (st) => (st.t === "x" ? 1 : -1) * evalX(st.b),
    diemHetNuoc: (st, ply) => -100000 + ply,
    ai(st, muc) { return timNuoc(this, st, [2, 5, 9][muc - 1], muc === 1 ? 40 : 3); },
    ketThuc(st) {
      if (st.hm >= 80) return { hoa: true, chu: "Hòa: 40 nước không ăn quân." };
      if (legal(st).length) return null;
      const thang = st.t === "x" ? "o" : "x";
      return { thang, chu: (thang === "x" ? "Đỏ" : "Đen") + " thắng!" };
    },
    canhBao: (st) => (legal(st).some((m) => m.bat.length) ? "Bắt buộc ăn quân." : ""),
    veQuan(ctx, p, x, y, o) {
      const d = p.toLowerCase() === "x";
      ctx.beginPath(); ctx.arc(x, y + o * 0.04, o * 0.38, 0, 7); ctx.fillStyle = "rgba(0,0,0,.35)"; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, o * 0.38, 0, 7); ctx.fillStyle = d ? "#c0261e" : "#1e1e1e"; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, o * 0.27, 0, 7); ctx.strokeStyle = d ? "#ff8a80" : "#666"; ctx.lineWidth = o * 0.04; ctx.stroke();
      if (p === "X" || p === "O") {
        ctx.fillStyle = "#f2c94c"; ctx.font = `bold ${o * 0.36}px sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("♛︎", x, y + o * 0.02); ctx.textAlign = "start"; ctx.textBaseline = "alphabetic";
      }
    },
    o: (W) => W / 8,
    ve(ctx, W, H, st, ui) {
      const o = W / 8;
      for (let s = 0; s < 64; s++) {
        const r = s >> 3, c = s & 7;
        ctx.fillStyle = (r + c) % 2 ? "#6b8e4e" : "#eee8d0";
        if (st.last && st.last.includes(s)) ctx.fillStyle = "#9cb86a";
        if (s === ui.sel) ctx.fillStyle = "#c9d96b";
        ctx.fillRect(c * o, r * o, o, o);
      }
      for (let s = 0; s < 64; s++) if (st.b[s] !== ".") this.veQuan(ctx, st.b[s], (s & 7) * o + o / 2, (s >> 3) * o + o / 2, o);
      for (const t of ui.dich) {
        ctx.beginPath(); ctx.arc((t & 7) * o + o / 2, (t >> 3) * o + o / 2, o * 0.14, 0, 7);
        ctx.fillStyle = "rgba(255,255,255,.75)"; ctx.fill();
      }
    },
    toaDo: (x, y, W) => { const o = W / 8, c = Math.floor(x / o), r = Math.floor(y / o); return ttrong(r, c) ? r * 8 + c : -1; },
    tiLe: 1,
  };
})();

/* ===================================================== CỜ CARO (15x15, 5 quân liền nhau thắng) */
const CoCaro = (() => {
  const N = 15, DIR = [[0, 1], [1, 0], [1, 1], [1, -1]];
  const ttrong = (r, c) => r >= 0 && r < N && c >= 0 && c < N;
  const init = () => ({ b: Array(N * N).fill("."), t: "x", last: null, thang: null });

  function duong(b, s, dr, dc, p) {           // đếm quân p liền nhau đi qua ô s (coi như đã đặt) và số đầu còn trống
    const r = Math.floor(s / N), c = s % N;
    let n = 1, mo = 0;
    for (const k of [1, -1]) {
      let rr = r + dr * k, cc = c + dc * k;
      while (ttrong(rr, cc) && b[rr * N + cc] === p) { n++; rr += dr * k; cc += dc * k; }
      if (ttrong(rr, cc) && b[rr * N + cc] === ".") mo++;
    }
    return [n, mo];
  }
  function thang5(b, s, p) {
    for (const [dr, dc] of DIR) {
      if (duong(b, s, dr, dc, p)[0] >= 5) {
        const r = Math.floor(s / N), c = s % N, o = [s];
        for (const k of [1, -1]) { let rr = r + dr * k, cc = c + dc * k; while (ttrong(rr, cc) && b[rr * N + cc] === p) { o.push(rr * N + cc); rr += dr * k; cc += dc * k; } }
        return o;
      }
    }
    return null;
  }
  function diemO(b, s, p) {
    let d = 0;
    for (const [dr, dc] of DIR) {
      const [n, mo] = duong(b, s, dr, dc, p);
      if (n >= 5) d += 1e6;
      else if (mo === 0) continue;
      else if (n === 4) d += mo === 2 ? 1e5 : 1e4;
      else if (n === 3) d += mo === 2 ? 5e3 : 400;
      else if (n === 2) d += mo === 2 ? 150 : 40;
      else d += mo === 2 ? 10 : 3;
    }
    return d;
  }
  function apply(st, m) {
    const b = st.b.slice();
    b[m.t] = st.t;
    return { b, t: st.t === "x" ? "o" : "x", last: [m.t], thang: thang5(b, m.t, st.t) };
  }
  function ungVien(b) {
    const ds = [];
    for (let s = 0; s < N * N; s++) {
      if (b[s] !== ".") continue;
      const r = Math.floor(s / N), c = s % N;
      let gan = false;
      for (let dr = -2; dr <= 2 && !gan; dr++) for (let dc = -2; dc <= 2; dc++) if (ttrong(r + dr, c + dc) && b[(r + dr) * N + c + dc] !== ".") { gan = true; break; }
      if (gan) ds.push(s);
    }
    return ds.length ? ds : [Math.floor(N * N / 2)];
  }
  return {
    ten: "Cờ caro", ben: ["x", "o"], tenBen: { x: "X", o: "O" }, cot: N, hang: N, datQuan: true,
    init, apply,
    legal: (st) => st.b.map((p, s) => (p === "." ? { t: s } : null)).filter(Boolean),
    ai(st, muc) {
      const ta = st.t, ho = ta === "x" ? "o" : "x", phong = [0.55, 0.9, 1.0][muc - 1];
      const kq = ungVien(st.b).map((s) => [diemO(st.b, s, ta) * (muc === 3 ? 1.1 : 1) + diemO(st.b, s, ho) * phong, s]).sort((a, b) => b[0] - a[0]);
      const top = muc === 1 ? kq.slice(0, 4) : kq.filter((x) => x[0] >= kq[0][0] * 0.97).slice(0, 3);
      return { t: ngauNhien(top)[1] };
    },
    ketThuc(st) {
      if (st.thang) { const p = st.b[st.last[0]]; return { thang: p, chu: p.toUpperCase() + " thắng: 5 quân liền nhau!", o: st.thang }; }
      if (!st.b.includes(".")) return { hoa: true, chu: "Hòa: hết ô." };
      return null;
    },
    canhBao: () => "",
    ve(ctx, W, H, st, ui) {
      const o = W / N;
      ctx.fillStyle = "#fdfaf2"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "#cfd6e2"; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i <= N; i++) { ctx.moveTo(i * o, 0); ctx.lineTo(i * o, H); ctx.moveTo(0, i * o); ctx.lineTo(W, i * o); }
      ctx.stroke();
      const kt = ui.ket && ui.ket.o ? ui.ket.o : [];
      for (let s = 0; s < N * N; s++) {
        const p = st.b[s];
        const x = (s % N) * o, y = Math.floor(s / N) * o;
        if ((st.last && st.last[0] === s) || kt.includes(s)) { ctx.fillStyle = kt.includes(s) ? "#ffe08a" : "#e6eefb"; ctx.fillRect(x + 1, y + 1, o - 2, o - 2); }
        if (p === ".") continue;
        ctx.lineWidth = o * 0.12; ctx.lineCap = "round";
        if (p === "x") {
          ctx.strokeStyle = "#c0261e"; ctx.beginPath();
          ctx.moveTo(x + o * 0.25, y + o * 0.25); ctx.lineTo(x + o * 0.75, y + o * 0.75);
          ctx.moveTo(x + o * 0.75, y + o * 0.25); ctx.lineTo(x + o * 0.25, y + o * 0.75); ctx.stroke();
        } else {
          ctx.strokeStyle = "#1d3f73"; ctx.beginPath(); ctx.arc(x + o / 2, y + o / 2, o * 0.27, 0, 7); ctx.stroke();
        }
      }
    },
    toaDo: (x, y, W) => { const o = W / N, c = Math.floor(x / o), r = Math.floor(y / o); return ttrong(r, c) ? r * N + c : -1; },
    tiLe: 1,
  };
})();

/* ===================================================== ĐIỀU KHIỂN CHUNG */
(() => {
  const GAME = { tuong: CoTuong, vua: CoVua, caro: CoCaro, dam: CoDam };
  const cv = document.getElementById("ban"), ctx = cv.getContext("2d");
  const $ = (id) => document.getElementById(id);
  let G, st, lichSu, ket, ban = false;
  const ui = { sel: -1, dich: [] };
  const cheDo = () => $("che-do").value, muc = () => +$("muc").value;
  const luotNguoi = () => cheDo() === "2" || st.t === G.ben[0];

  function chonGame(k) {
    G = GAME[k];
    document.querySelectorAll(".tab-co button").forEach((b) => b.setAttribute("aria-selected", b.dataset.g === k));
    try { localStorage.setItem("co-game", k); } catch (e) { /* trình duyệt chặn lưu: bỏ qua */ }
    vanMoi();
  }
  function vanMoi() { st = G.init(); lichSu = []; ket = null; ui.sel = -1; ui.dich = []; ve(); }

  function kichThuoc() {
    const w = Math.min(cv.parentElement.clientWidth, 620), h = Math.round(w * G.tiLe), dpr = window.devicePixelRatio || 1;
    cv.style.width = w + "px"; cv.style.height = h + "px";
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return [w, h];
  }
  function ve() {
    const [w, h] = kichThuoc();
    ctx.clearRect(0, 0, w, h);
    if (keo && keo.dang) {                              // quân đang kéo: vẽ bàn không có quân đó, rồi vẽ quân theo con trỏ
      G.ve(ctx, w, h, Object.assign({}, st, { b: st.b.map((p, i) => (i === keo.f ? "." : p)) }), Object.assign({ ket }, ui));
      G.veQuan(ctx, st.b[keo.f], keo.x, keo.y, G.o(w) * 1.08, true);
    } else G.ve(ctx, w, h, st, Object.assign({ ket }, ui));
    let chu;
    if (ket) chu = ket.chu + (cheDo() === "1" && !ket.hoa ? (ket.thang === G.ben[0] ? " Bạn thắng máy." : " Máy thắng.") : "");
    else if (ban) chu = "Máy đang nghĩ…";
    else chu = (cheDo() === "1" ? (luotNguoi() ? "Lượt bạn" : "Lượt máy") : "Lượt " + G.tenBen[st.t]) + ` (${G.tenBen[st.t]}). ` + G.canhBao(st);
    $("trang-thai").textContent = chu;
    $("trang-thai").classList.toggle("xong", !!ket);
    $("ben-nguoi").textContent = cheDo() === "1" ? `Bạn cầm ${G.tenBen[G.ben[0]]}, đi trước.` : "Hai người chơi trên cùng máy.";
  }

  function di(m) {
    lichSu.push(st);
    st = G.apply(st, m);
    ui.sel = -1; ui.dich = [];
    ket = G.ketThuc(st);
    ve();
    if (!ket && cheDo() === "1" && !luotNguoi()) mayDi();
  }
  function mayDi() {
    ban = true; ve();
    setTimeout(() => {               // để trình duyệt vẽ xong chữ "Máy đang nghĩ" trước khi tính
      const m = G.ai(st, muc());
      ban = false;
      if (m) di(m); else ve();
    }, 40);
  }

  function chonPhong(ds) {
    const hop = $("phong-cap");
    hop.hidden = false;
    hop.querySelectorAll("button").forEach((b) => {
      b.onclick = () => { hop.hidden = true; di(ds.find((m) => m.promo === b.dataset.p)); };
    });
  }

  /* Điều khiển bằng chuột hoặc ngón tay: bấm quân rồi bấm ô đích, hoặc kéo quân thả vào ô đích. */
  let keo = null;                                       // {f, x, y, x0, y0, dang}
  const viTri = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top, r.width]; };
  const choPhep = () => !(ban || ket || !luotNguoi() || !$("phong-cap").hidden);

  function diToi(f, s) {                               // trả về true nếu đã đi
    const ds = G.legal(st).filter((m) => m.f === f && m.t === s);
    if (!ds.length) return false;
    if (ds[0].promo) chonPhong(ds);
    else di(ds.reduce((a, b) => ((b.bat || []).length > (a.bat || []).length ? b : a)));
    return true;
  }
  function chon(s) {
    const ms = G.legal(st).filter((m) => m.f === s);
    if (ms.length) { ui.sel = s; ui.dich = [...new Set(ms.map((m) => m.t))]; return true; }
    ui.sel = -1; ui.dich = [];
    return false;
  }

  cv.addEventListener("pointerdown", (e) => {
    if (!choPhep() || e.button > 0) return;
    const [x, y, W] = viTri(e), s = G.toaDo(x, y, W);
    if (s < 0) return;
    e.preventDefault();
    if (G.datQuan) { if (st.b[s] === ".") di({ t: s }); return; }
    if (ui.sel >= 0 && ui.sel !== s && diToi(ui.sel, s)) return;
    const daChon = ui.sel === s;
    const coQuan = chon(s);
    if (coQuan) { keo = { f: s, x, y, x0: x, y0: y, dang: false, daChon }; cv.setPointerCapture(e.pointerId); }
    ve();
    if (!coQuan) $("trang-thai").textContent = "Hãy chọn quân của bạn (" + G.tenBen[st.t] + ") còn nước đi được.";
  });
  cv.addEventListener("pointermove", (e) => {
    if (!keo) return;
    const [x, y] = viTri(e);
    keo.x = x; keo.y = y;
    if (!keo.dang && Math.hypot(x - keo.x0, y - keo.y0) > 6) keo.dang = true;
    if (keo.dang) ve();
  });
  function thaKeo(e, huy) {
    if (!keo) return;
    const k = keo; keo = null;
    if (!huy && k.dang) {                                // kéo thả: đi nếu ô thả hợp lệ, không thì quân về chỗ cũ, vẫn chọn
      const [x, y, W] = viTri(e), s = G.toaDo(x, y, W);
      if (s >= 0 && s !== k.f && diToi(k.f, s)) return;
    } else if (!huy && k.daChon) { ui.sel = -1; ui.dich = []; }   // bấm lại quân đang chọn: bỏ chọn
    ve();
  }
  cv.addEventListener("pointerup", (e) => thaKeo(e, false));
  cv.addEventListener("pointercancel", (e) => thaKeo(e, true));

  $("van-moi").onclick = () => { if (!ban) vanMoi(); };
  $("di-lai").onclick = () => {
    if (ban || !lichSu.length) return;
    st = lichSu.pop();
    if (cheDo() === "1") while (lichSu.length && st.t !== G.ben[0]) st = lichSu.pop();
    ket = null; ui.sel = -1; ui.dich = []; $("phong-cap").hidden = true;
    ve();
  };
  $("che-do").onchange = () => { ve(); if (!ket && cheDo() === "1" && !luotNguoi()) mayDi(); };
  $("muc").onchange = ve;
  document.querySelectorAll(".tab-co button").forEach((b) => (b.onclick = () => { if (!ban) chonGame(b.dataset.g); }));
  window.addEventListener("resize", () => G && ve());

  let dau = "tuong";
  try { dau = new URLSearchParams(location.search).get("g") || localStorage.getItem("co-game") || dau; } catch (e) { /* bỏ qua */ }
  chonGame(GAME[dau] ? dau : "tuong");
})();
