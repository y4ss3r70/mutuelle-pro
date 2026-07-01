export default function VideoSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Découvrez MutuellePro
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Regardez comment nous aidons nos clients à trouver la meilleure
          mutuelle santé.
        </p>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-[600px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source
              src="/video/12925635_1920_1080_24fps.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
    </section>
  );
}