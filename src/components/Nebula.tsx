import React from "react";

export default function Nebula() {
  return (
    <>
      <div 
        className="fixed rounded-full blur-[120px] -z-40 opacity-50 pointer-events-none w-[60vw] h-[60vw] top-[-20vh] left-[-20vw]"
        style={{
          background: "radial-gradient(circle, var(--nebula-purple) 0%, transparent 70%)",
          animation: "flow 20s infinite alternate linear"
        }}
      />
      <div 
        className="fixed rounded-full blur-[120px] -z-40 opacity-50 pointer-events-none w-[50vw] h-[50vw] bottom-[-10vh] right-[-10vw]"
        style={{
          background: "radial-gradient(circle, var(--nebula-blue) 0%, transparent 70%)",
          animation: "flow 20s infinite alternate linear",
          animationDelay: "-10s"
        }}
      />
      
      <style>{`
        @keyframes flow {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10vw, 5vh) scale(1.1); }
        }
      `}</style>
    </>
  );
}
