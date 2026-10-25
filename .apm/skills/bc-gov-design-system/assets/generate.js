/**
 * BC Government Design System — PowerPoint template generator
 * Uses pptxgenjs. Run: node generate.js
 * Output: bc-gov-template.pptx
 *
 * Fonts: Calibri (BC Sans substitute — install BC Sans for production)
 * Colors: BC Design System tokens (no # prefix — pptxgenjs requirement)
 */

const pptxgen = require("pptxgenjs");
const path = require("path");

// ── Token map (hex without #) ─────────────────────────────────────────────
const C = {
  navy:       "013366",
  navyHover:  "1E5189",
  navyDark:   "01264C",
  focus:      "2E5DD7",
  link:       "255A90",
  textPrimary:"2D2D2D",
  textSecond: "474543",
  textMuted:  "9F9D9C",
  textInvert: "FFFFFF",
  surface:    "FAFAF8",
  surfaceHov: "EDEBE9",
  dark:       "252423",
  border:     "D8D8D8",
  borderDark: "353433",
  indigenous: "FBD389",
  success:    "42814A",
  successBg:  "F6FFF8",
  warning:    "F8BB47",
  warningBg:  "FEF1D8",
  danger:     "CE3E39",
  dangerBg:   "F4E1E2",
  infoBg:     "D8EAFD",
  white:      "FFFFFF",
};

const FONT   = "Calibri";
const LOGO   = path.join(__dirname, "bc-logo.png");
const W      = 10;   // slide width inches (16x9)
const H      = 5.625;

// ── Shadow factory (never reuse objects — pptxgenjs mutates in place) ──────
const mkShadow = () => ({
  type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12
});

// ── Helpers ────────────────────────────────────────────────────────────────

/** Solid navy left band + off-white right panel */
function twoPanel(slide, navyWidth = 3.2) {
  slide.addShape("rect", {
    x: 0, y: 0, w: navyWidth, h: H,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  slide.addShape("rect", {
    x: navyWidth, y: 0, w: W - navyWidth, h: H,
    fill: { color: C.surface }, line: { color: C.surface }
  });
}

/** Colored circle used as an icon stand-in */
function iconCircle(slide, x, y, color, label) {
  slide.addShape("ellipse", {
    x, y, w: 0.45, h: 0.45,
    fill: { color }, line: { color }
  });
  slide.addText(label, {
    x, y: y + 0.02, w: 0.45, h: 0.45,
    fontSize: 13, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });
}

/** Standard content-slide footer rule */
function footerRule(slide) {
  slide.addShape("rect", {
    x: 0.5, y: H - 0.18, w: W - 1, h: 0.02,
    fill: { color: C.border }, line: { color: C.border }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  BUILD PRESENTATION
// ─────────────────────────────────────────────────────────────────────────────
const pres = new pptxgen();
pres.layout  = "LAYOUT_16x9";
pres.author  = "BC Government Design System";
pres.title   = "BC Government Presentation Template";
pres.subject = "B.C. Design System v0.7.0";

// ─── Slide 1 — Title ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Indigenous amber band at bottom
  s.addShape("rect", {
    x: 0, y: H - 0.18, w: W, h: 0.18,
    fill: { color: C.indigenous }, line: { color: C.indigenous }
  });

  // BC logo top-left
  s.addImage({ path: LOGO, x: 0.5, y: 0.35, w: 1.66, h: 0.64, altText: "Government of British Columbia" });

  // Vertical divider
  s.addShape("rect", {
    x: 0.5, y: 1.35, w: W - 1, h: 0.03,
    fill: { color: "1E5189" }, line: { color: "1E5189" }
  });

  // Title
  s.addText("Presentation title", {
    x: 0.5, y: 1.55, w: 8.5, h: 1.2,
    fontFace: FONT, fontSize: 40, bold: true,
    color: C.white, align: "left", valign: "top", margin: 0
  });

  // Subtitle
  s.addText("Subtitle or department name  ·  Month Year", {
    x: 0.5, y: 2.85, w: 8.5, h: 0.5,
    fontFace: FONT, fontSize: 16, bold: false,
    color: "CADCFC", align: "left", margin: 0
  });

  // Presenter line
  s.addText("Presenter name  ·  Role  ·  Ministry", {
    x: 0.5, y: 3.5, w: 8.5, h: 0.4,
    fontFace: FONT, fontSize: 13,
    color: "9BBAD6", align: "left", margin: 0
  });
}

// ─── Slide 2 — Agenda / Contents ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // Navy top bar
  s.addShape("rect", {
    x: 0, y: 0, w: W, h: 0.55,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("Agenda", {
    x: 0.5, y: 0, w: 9, h: 0.55,
    fontFace: FONT, fontSize: 18, bold: true,
    color: C.white, valign: "middle", margin: 0
  });

  // Agenda items
  const items = [
    ["01", "Context and background"],
    ["02", "Current state"],
    ["03", "Proposed approach"],
    ["04", "Recommendations"],
    ["05", "Next steps"],
  ];

  items.forEach(([num, label], i) => {
    const y = 0.85 + i * 0.82;

    // Number circle
    s.addShape("ellipse", {
      x: 0.5, y, w: 0.52, h: 0.52,
      fill: { color: C.navy }, line: { color: C.navy }
    });
    s.addText(num, {
      x: 0.5, y: y + 0.01, w: 0.52, h: 0.52,
      fontFace: FONT, fontSize: 13, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0
    });

    // Label
    s.addText(label, {
      x: 1.2, y: y + 0.08, w: 8, h: 0.38,
      fontFace: FONT, fontSize: 16,
      color: C.textPrimary, align: "left", margin: 0
    });

    // Divider (skip last)
    if (i < items.length - 1) {
      s.addShape("rect", {
        x: 0.5, y: y + 0.62, w: W - 1, h: 0.01,
        fill: { color: C.border }, line: { color: C.border }
      });
    }
  });
}

// ─── Slide 3 — Section divider ───────────────────────────────────────────────
{
  const s = pres.addSlide();
  twoPanel(s, 3.2);

  // Section number on navy panel
  s.addText("01", {
    x: 0, y: 1.6, w: 3.2, h: 1.2,
    fontFace: FONT, fontSize: 72, bold: true,
    color: "1E5189", align: "center", valign: "middle", margin: 0
  });

  // Section title on right
  s.addText("Section title", {
    x: 3.6, y: 1.8, w: 6, h: 0.9,
    fontFace: FONT, fontSize: 32, bold: true,
    color: C.textPrimary, align: "left", margin: 0
  });
  s.addText("Optional one-line description of what this section covers.", {
    x: 3.6, y: 2.85, w: 6, h: 0.5,
    fontFace: FONT, fontSize: 14,
    color: C.textSecond, align: "left", margin: 0
  });

  // Indigenous amber bottom band on navy panel
  s.addShape("rect", {
    x: 0, y: H - 0.12, w: 3.2, h: 0.12,
    fill: { color: C.indigenous }, line: { color: C.indigenous }
  });
}

// ─── Slide 4 — Content with 3 icon rows ──────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // Navy top bar
  s.addShape("rect", {
    x: 0, y: 0, w: W, h: 0.55,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("Slide title", {
    x: 0.5, y: 0, w: 9, h: 0.55,
    fontFace: FONT, fontSize: 18, bold: true,
    color: C.white, valign: "middle", margin: 0
  });

  const rows = [
    { icon: "i",  color: C.focus,   head: "Key finding one",    body: "Describe the finding, insight, or recommendation in plain language. Keep it to two lines maximum." },
    { icon: "ii", color: C.success, head: "Key finding two",    body: "Describe the second point here. Use short sentences and avoid jargon throughout." },
    { icon: "iii",color: C.navy,    head: "Key finding three",  body: "Third point. Every bullet should stand alone — readers scan, they do not read." },
  ];

  rows.forEach(({ icon, color, head, body }, i) => {
    const y = 0.85 + i * 1.4;

    // Background card
    s.addShape("rect", {
      x: 0.5, y, w: 9, h: 1.15,
      fill: { color: C.surface }, line: { color: C.border },
      shadow: mkShadow()
    });

    // Left accent bar
    s.addShape("rect", {
      x: 0.5, y, w: 0.06, h: 1.15,
      fill: { color }, line: { color }
    });

    // Icon circle
    iconCircle(s, 0.75, y + 0.35, color, icon.slice(0, 1).toUpperCase());

    // Heading
    s.addText(head, {
      x: 1.45, y: y + 0.12, w: 7.8, h: 0.38,
      fontFace: FONT, fontSize: 15, bold: true,
      color: C.textPrimary, align: "left", margin: 0
    });

    // Body
    s.addText(body, {
      x: 1.45, y: y + 0.52, w: 7.8, h: 0.55,
      fontFace: FONT, fontSize: 13,
      color: C.textSecond, align: "left", margin: 0
    });
  });

  footerRule(s);
}

// ─── Slide 5 — Two-column: stat callout + bullets ────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // Navy top bar
  s.addShape("rect", {
    x: 0, y: 0, w: W, h: 0.55,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("Slide title", {
    x: 0.5, y: 0, w: 9, h: 0.55,
    fontFace: FONT, fontSize: 18, bold: true,
    color: C.white, valign: "middle", margin: 0
  });

  // Left: stat callout panel
  s.addShape("rect", {
    x: 0.5, y: 0.75, w: 3.8, h: 4.35,
    fill: { color: C.navy }, line: { color: C.navy }
  });

  const stats = [
    { num: "87%",   label: "Satisfaction rate" },
    { num: "2.4M",  label: "Transactions per year" },
    { num: "42",    label: "Services digitized" },
  ];

  stats.forEach(({ num, label }, i) => {
    const y = 1.05 + i * 1.3;
    s.addText(num, {
      x: 0.5, y, w: 3.8, h: 0.75,
      fontFace: FONT, fontSize: 48, bold: true,
      color: C.indigenous, align: "center", valign: "bottom", margin: 0
    });
    s.addText(label, {
      x: 0.5, y: y + 0.72, w: 3.8, h: 0.38,
      fontFace: FONT, fontSize: 13,
      color: "CADCFC", align: "center", margin: 0
    });
  });

  // Right: bullet content
  s.addText("Key points", {
    x: 4.7, y: 0.82, w: 5, h: 0.42,
    fontFace: FONT, fontSize: 18, bold: true,
    color: C.textPrimary, align: "left", margin: 0
  });

  s.addText([
    { text: "First supporting point goes here — keep each bullet to one idea",          options: { bullet: true, breakLine: true } },
    { text: "Second point that provides evidence or context for the headline stat",      options: { bullet: true, breakLine: true } },
    { text: "Third point — plain language, no jargon, sentence case throughout",        options: { bullet: true, breakLine: true } },
    { text: "Fourth point — if you have more than five bullets, split into two slides", options: { bullet: true } },
  ], {
    x: 4.7, y: 1.42, w: 5, h: 3.0,
    fontFace: FONT, fontSize: 14,
    color: C.textPrimary, align: "left",
    paraSpaceAfter: 10
  });

  footerRule(s);
}

// ─── Slide 6 — Data table ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // Navy top bar
  s.addShape("rect", {
    x: 0, y: 0, w: W, h: 0.55,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addText("Data summary", {
    x: 0.5, y: 0, w: 9, h: 0.55,
    fontFace: FONT, fontSize: 18, bold: true,
    color: C.white, valign: "middle", margin: 0
  });

  const mkHeader = txt => ({
    text: txt,
    options: {
      fill: { color: C.navy },
      color: C.white,
      bold: true,
      fontSize: 13,
      fontFace: FONT,
      align: "left",
      valign: "middle",
      margin: [0, 8, 0, 8]
    }
  });

  const mkCell = (txt, even, align = "left") => ({
    text: txt,
    options: {
      fill: { color: even ? C.surface : C.white },
      color: C.textPrimary,
      fontSize: 12,
      fontFace: FONT,
      align,
      valign: "middle",
      margin: [0, 8, 0, 8]
    }
  });

  const tableData = [
    [mkHeader("Service"), mkHeader("Volume"), mkHeader("Satisfaction"), mkHeader("Status")],
    [mkCell("Online application", true), mkCell("124,500", true, "right"), mkCell("91%", true, "center"), mkCell("Live", true)],
    [mkCell("Renewal portal",     false), mkCell("87,200",  false, "right"), mkCell("88%", false, "center"), mkCell("Live", false)],
    [mkCell("Document upload",    true),  mkCell("43,100",  true,  "right"), mkCell("79%", true,  "center"), mkCell("Beta", true)],
    [mkCell("Payment gateway",    false), mkCell("201,300", false, "right"), mkCell("94%", false, "center"), mkCell("Live", false)],
    [mkCell("Status tracker",     true),  mkCell("65,800",  true,  "right"), mkCell("85%", true,  "center"), mkCell("Pilot", true)],
  ];

  s.addTable(tableData, {
    x: 0.5, y: 0.75, w: 9,
    rowH: 0.5,
    border: { pt: 1, color: C.border },
    colW: [3.5, 1.8, 1.8, 1.9]
  });

  footerRule(s);
}

// ─── Slide 7 — Quote / callout ────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.surface };

  // Large left amber accent
  s.addShape("rect", {
    x: 0.5, y: 1.1, w: 0.1, h: 3.2,
    fill: { color: C.indigenous }, line: { color: C.indigenous }
  });

  // Quote text
  s.addText(
    "\u201CThe best government services are invisible \u2014 they just work. Our job is to get out of the way and let people accomplish what they came to do.\u201D",
    {
      x: 0.85, y: 1.1, w: 7.8, h: 2.6,
      fontFace: FONT, fontSize: 22, bold: false, italic: true,
      color: C.textPrimary, align: "left", valign: "middle", margin: 0
    }
  );

  // Attribution
  s.addText("Name, Role  ·  Ministry of Citizens\u2019 Services", {
    x: 0.85, y: 3.9, w: 7.8, h: 0.4,
    fontFace: FONT, fontSize: 13, bold: true,
    color: C.textSecond, align: "left", margin: 0
  });

  // BC logo bottom-right
  s.addImage({ path: LOGO, x: 8.1, y: 4.7, w: 1.38, h: 0.53, altText: "Government of British Columbia" });
}

// ─── Slide 8 — Closing / Next steps ──────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.dark };

  // Indigenous amber band at top
  s.addShape("rect", {
    x: 0, y: 0, w: W, h: 0.18,
    fill: { color: C.indigenous }, line: { color: C.indigenous }
  });

  // BC logo
  s.addImage({ path: LOGO, x: 0.5, y: 0.45, w: 1.66, h: 0.64, altText: "Government of British Columbia" });

  // Heading
  s.addText("Next steps", {
    x: 0.5, y: 1.45, w: 8.5, h: 0.8,
    fontFace: FONT, fontSize: 36, bold: true,
    color: C.white, align: "left", margin: 0
  });

  const steps = [
    ["1",  "Description of first action item or decision required"],
    ["2",  "Second action — owner, timeline, and dependencies noted here"],
    ["3",  "Third action — keep each item to a single clear outcome"],
  ];

  steps.forEach(([num, text], i) => {
    const y = 2.5 + i * 0.75;
    s.addShape("ellipse", {
      x: 0.5, y, w: 0.4, h: 0.4,
      fill: { color: C.indigenous }, line: { color: C.indigenous }
    });
    s.addText(num, {
      x: 0.5, y: y + 0.01, w: 0.4, h: 0.4,
      fontFace: FONT, fontSize: 13, bold: true,
      color: C.dark, align: "center", valign: "middle", margin: 0
    });
    s.addText(text, {
      x: 1.1, y: y + 0.04, w: 8.4, h: 0.38,
      fontFace: FONT, fontSize: 14,
      color: "CADCFC", align: "left", margin: 0
    });
  });

  // Contact
  s.addText("Questions?  designsystem@gov.bc.ca", {
    x: 0.5, y: H - 0.55, w: 9, h: 0.3,
    fontFace: FONT, fontSize: 12,
    color: "9BBAD6", align: "left", margin: 0
  });
}

// ─── Write file ───────────────────────────────────────────────────────────────
pres.writeFile({ fileName: path.join(__dirname, "bc-gov-template.pptx") })
  .then(() => console.log("✓ bc-gov-template.pptx written"))
  .catch(err => { console.error("Error:", err); process.exit(1); });
