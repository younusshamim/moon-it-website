import { BookIcon, UserIcon } from "@sanity/icons";
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
    ]);
