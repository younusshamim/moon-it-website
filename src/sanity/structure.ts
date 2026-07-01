import { BookIcon, DocumentIcon, UserIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Courses")
        .icon(BookIcon)
        .child(S.documentTypeList("course").title("Courses")),
      S.listItem()
        .title("Instructors")
        .icon(UserIcon)
        .child(S.documentTypeList("instructor").title("Instructors")),
      S.divider(),
      S.listItem()
        .title("Admissions")
        .icon(DocumentIcon)
        .child(S.documentTypeList("admissionSubmission").title("Admissions")),
      S.listItem()
        .title("Free Seminar")
        .icon(DocumentIcon)
        .child(S.documentTypeList("seminarSubmission").title("Free Seminar")),
    ]);
