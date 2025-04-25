// tests/clock.js
import { describe, expect, it } from "vitest";
import { computeTime, getTime } from "../modules/clock";

describe("compute time", () => {
  it("should return mortin if value is <= 2", () => {
    expect(computeTime(1)).toBe("mortin");
  });
  it("should return aprenoon if value is <= 4", () => {
    expect(computeTime(3)).toBe("aprenoon");
  });
  it("should return soirning if value is <= 5", () => {
    expect(computeTime(5)).toBe("soirning");
  });
  it("should return nuight if value is > 5", () => {
    expect(computeTime(6)).toBe("nuight");
  });
});

describe("get time", () => {
  describe("tests individuels", () => {
    describe("valeur 1", () => {
      it("should return -1 si la lune est 1 et les autres désactivés", () => {
        expect(getTime(1, 0, 0)).toBe(-1);
      });
      it("should return 1 si le soleil est 1 et les autres désactivés", () => {
        expect(getTime(0, 1, 0)).toBe(1);
      });
      it("should return 3 si la terre est 1 et les autres désactivés", () => {
        expect(getTime(0, 0, 1)).toBe(3);
      });
    });
    describe("valeur 2", () => {
      it("should return 1 si la lune est 2 et les autres désactivés", () => {
        expect(getTime(2, 0, 0)).toBe(1);
      });
      it("should return 2 si le soleil est 2 et les autres désactivés", () => {
        expect(getTime(0, 2, 0)).toBe(2);
      });
      it("should return 6 si la terre est 2 et les autres désactivés", () => {
        expect(getTime(0, 0, 2)).toBe(6);
      });
    });
  });
  describe("tests spécifiques", () => {
    it("should return 0 if they are all disabled", () => {
      expect(getTime(0, 0, 0)).toBe(0);
    });
    it("should return le total divisé par 2 arrondi à l'entier inférieur si la lune est 2", () => {
      expect(getTime(2, 1, 1)).toBe(1);
    });
    it("should return 6 si le soleil n'est pas 1 et la terre est 2", () => {
      expect(getTime(0, 2, 2)).toBe(6);
    });
    it("should return soleil + cadran *2 + terre si le soleil est 2 et la terre est 1", () => {
      expect(getTime(0, 2, 1)).toBe(2 + 1 * 2 + 2);
    });
    it("should not count terre if soleil is 1", () => {
      expect(getTime(0, 1, 2)).toBe(1);
    });
  });
});
