import { describe, expect, it } from "vitest";

import listZipContents from "./listZipContents";

describe("listZipContents", () => {
  it("should list the contents of a ZIP entries array", async () => {
    const entries = [
      { filename: "dir1/file1.txt", directory: false },
      { filename: "dir1/file2.txt", directory: false },
      { filename: "dir1/dir2/file3.txt", directory: false },
      { filename: "dir1/dir2/dir3/file4.txt", directory: false },
      { filename: "file5.txt", directory: false },
      { filename: "dir1/dir2/file6.txt", directory: false },
      { filename: "dir4/file7.txt", directory: false },
    ];

    // @ts-expect-error
    const { directories, files } = listZipContents(entries, "", 10);

    expect(directories).toEqual(["dir1", "dir4"]);
    expect(files).toEqual([{ filename: "file5.txt", directory: false }]);
  });

  it("should list the contents of a ZIP entries array with a prefix", async () => {
    const entries = [
      { filename: "dir1/file1.txt", directory: false },
      { filename: "dir1/file2.txt", directory: false },
      { filename: "dir1/dir2/file3.txt", directory: false },
      { filename: "dir1/dir2/dir3/file4.txt", directory: false },
    ];

    // @ts-expect-error
    const { directories, files } = listZipContents(entries, "dir1", 10);

    expect(directories).toEqual(["dir1/dir2"]);
    expect(files).toEqual([
      { filename: "dir1/file1.txt", directory: false },
      { filename: "dir1/file2.txt", directory: false },
    ]);
  });

  it("should list the contents of a ZIP entries array with a prefix and a max depth", async () => {
    const entries = [
      { filename: "dir1/dir2/file1.txt", directory: false },
      { filename: "dir1/dir2/file2.txt", directory: false },
      { filename: "dir1/dir2/dir3/file3.txt", directory: false },
    ];

    // @ts-expect-error
    const { directories, files } = listZipContents(entries, "dir1/dir2/dir3", 2);

    expect(directories).toEqual(["dir1/dir2/dir3"]);
    expect(files).toEqual([
      { filename: "dir1/dir2/file1.txt", directory: false },
      { filename: "dir1/dir2/file2.txt", directory: false },
    ]);
  });
});
