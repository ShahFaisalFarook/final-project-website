const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-0 -left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-40 left-40 animation-delay-2000"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-20 left-96 animation-delay-4000"></div>
    </div>
  );
};

export default BackgroundBlobs;
