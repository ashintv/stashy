import { PropagateLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
        <PropagateLoader color="white" size={30} /> {/* Tailwind red-500 */}
    </div>
  );
}