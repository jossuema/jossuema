# Knowledge base

Everything about me — academia, industry, projects, research, talks, awards —
unified in one place so it is easy to reuse when applying to scholarships,
conferences, programs, and jobs, or when publishing.

## How this is organized

| Path | What lives here |
|---|---|
| [`biography.md`](biography.md) | Ready-to-paste bios (short / medium / long, EN & ES) |
| [`education.md`](education.md) | Degrees, exchange programs, specializations, coursework |
| [`experience.md`](experience.md) | Industry and research work experience |
| [`projects/`](projects/) | One file per project, with context, stack, and outcomes |
| [`research/`](research/) | Research work: papers, manuscripts, research internships |
| [`talks/`](talks/) | Talks, presentations, and posters |
| [`awards.md`](awards.md) | Awards, honors, grants, and scholarships |
| [`volunteering.md`](volunteering.md) | Volunteering and community leadership |
| [`skills.md`](skills.md) | Technical skills and languages |
| [`interests.md`](interests.md) | Research interests and topics I care about |
| [`applications/`](applications/) | Scholarship/program application tracker + archive |
| [`statements/`](statements/) | SOP, motivation letters, reusable long-form writing |
| [`references.md`](references.md) | Recommenders: who, what they can speak to, lead time |
| [`credentials.md`](credentials.md) | Transcripts, certificates, test scores inventory |
| [`profiles.md`](profiles.md) | ORCID, Scholar, LinkedIn + canonical author name |
| [`media/`](media/) | Headshots, slides/posters, project screenshots |
| [`sources/`](sources/) | Canonical source documents (CV transcriptions, notes) |

## Conventions

- **Provenance.** Every fact should be traceable to a document in
  [`sources/`](sources/) or to a public artifact (repo, publication, program
  page). When adding new information, drop the raw source in `sources/` first
  (dated), then distill it into the right file here.
- **Dates are absolute.** Never "last year" — always "2025".
- **`TODO(jossuema):`** marks a gap that needs information only I can provide
  (exact dates, links, titles). Grep for it before reusing content:

  ```bash
  grep -rn "TODO(jossuema)" knowledge/
  ```

- **English first.** Applications are mostly international; `biography.md`
  also keeps Spanish versions.
- The website ([`../website/`](../website/)) renders project data from
  [`../data/projects.yaml`](../data/projects.yaml) — keep that file in sync
  when a project changes.
