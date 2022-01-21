import { motion } from "framer-motion";
import { styled } from "../../../../lib/AppTheme";

const CustomizationPanelSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: aqua;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.secondary};

  > div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    text-align: left;
    width: 100%;
  }
`;

export default ({ children }: { children: any }) => {
  return (
    <CustomizationPanelSection
      as={motion.div}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ staggerChildren: 1, delay: 0.5, when: "beforeChildren" }}
    >
      {children}
    </CustomizationPanelSection>
  );
};
