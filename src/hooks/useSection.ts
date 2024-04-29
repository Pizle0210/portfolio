import { SectionName } from "@/lib/types";
import { useActiveSectionContext } from "@/providers/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = (sectionName: SectionName, threshold = 0.65) => {
  const { setActive, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, setActive, timeOfLastClick, sectionName]);
  return { inView, ref, timeOfLastClick };
};
