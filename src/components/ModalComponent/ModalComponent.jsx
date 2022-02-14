import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { DraggableComponent } from "./DraggableComponent";

export const ModalComponent = ({ isVisible, setIsVisible }) => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(125deg, #ff008c 0%, #1b1b1b 100%)",
    "linear-gradient(45deg, #87adfe 0%, #1b1b1b 100%)",
    "linear-gradient(-90deg, rgb(3, 209, 0) 10%, #1b1b1b)",
  ]);
//   const background = useTransform(x, xInput, [
//     "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
//     "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
//     "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
//   ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "#87adfe",
    "rgb(3, 209, 0)",
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [0, -100], [0, 1]);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
         
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0,1.1,1] }}
          exit={{opacity:[1,0.8,0], scale: [1, 1.1, 0] }}
          className="modal-container"
          // onClick={() => setIsVisible(false)}
        >
          <motion.div className="modal-main"  style={{ background}}>
          <span onClick={() => setIsVisible(false)}>x</span>
            <motion.div
              className="img-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <img src="/assets/img/img.png" alt="outfit-of-the-year" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="outfit-div"
            >
              <h2>Outfit Of The week</h2>
              <p>Do you like this product?</p>
              <p>(Click and drag Left or Right)</p>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DraggableComponent
                  color={color}
                  tickPath={tickPath}
                  crossPathA={crossPathA}
                  crossPathB={crossPathB}
                  x={x}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
