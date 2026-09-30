"""Create a public resume PDF with private contact details irreversibly redacted."""

from pathlib import Path
import re

import pymupdf as fitz


SOURCE = Path(
    ".local/conversation-workspace/files/attached_assets/"
    "Resume_Dipisha_Shivangi_0926_1790783694019.pdf"
)
OUTPUT_DIR = Path(".agents/outputs")
OUTPUT = OUTPUT_DIR / "resume-dipisha-shivangi-public.pdf"
PUBLIC_CONTACT = (
    "shivangidipisha@gmail.com  |  github.com/dipisha-21  |  "
    "linkedin.com/in/dipisha"
)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    document = fitz.open(SOURCE)
    redacted = False
    for page in document:
        for block in page.get_text("dict")["blocks"]:
            if block["type"] != 0:
                continue
            for line in block["lines"]:
                spans = line["spans"]
                if not any(
                    re.search(r"7605858033", span["text"]) for span in spans
                ):
                    continue
                line_rect = fitz.Rect(line["bbox"])
                contact_rect = fitz.Rect(
                    0, line_rect.y0 - 2, page.rect.width, line_rect.y1 + 2
                )
                page.add_redact_annot(contact_rect, fill=(1, 1, 1))
                page.apply_redactions()
                font_size = 9
                text_width = fitz.get_text_length(
                    PUBLIC_CONTACT, fontname="helv", fontsize=font_size
                )
                page.insert_text(
                    ((page.rect.width - text_width) / 2, line_rect.y1 - 1),
                    PUBLIC_CONTACT,
                    fontsize=font_size,
                    fontname="helv",
                    color=(0.1, 0.1, 0.1),
                )
                redacted = True
                break
            if redacted:
                break
        if redacted:
            break

    if not redacted:
        raise RuntimeError("Expected private phone number was not found")

    document.set_metadata(
        {"title": "Dipisha Shivangi — Data Engineer Resume", "author": "Dipisha Shivangi"}
    )
    document.save(OUTPUT, garbage=4, clean=True, deflate=True)
    document.close()

    check = fitz.open(OUTPUT)
    extracted = "\n".join(page.get_text() for page in check)
    if re.search(r"7605858033|\+91[\s-]*7605858033", extracted):
        raise RuntimeError("Private phone number remains in sanitized PDF")
    if "shivangidipisha@gmail.com" not in extracted:
        raise RuntimeError("Public contact line missing after redaction")
    for index, page in enumerate(check):
        image = page.get_pixmap(matrix=fitz.Matrix(1.4, 1.4), alpha=False)
        image.save(OUTPUT_DIR / f"resume-public-page-{index + 1}.png")
    print(f"Created {OUTPUT} ({check.page_count} pages), phone absent in text layer")
    check.close()


if __name__ == "__main__":
    main()