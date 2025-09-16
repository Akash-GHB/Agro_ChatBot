function ResponseCard({ res }) {
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <p className="text-sm text-gray-500">
          📍 {res.location} • {res.crop} • {res.time}
        </p>
        <p className="mt-2 font-semibold">❓ {res.question}</p>
        <div className="mt-3 p-3 bg-green-50 rounded-lg">🌿 {res.aiResponse}</div>
        <p className="mt-2 text-sm text-gray-600">
          🤖 Confidence: <span className="font-semibold">{res.confidence}</span>
        </p>
      </div>
    );
  }
  
  export default ResponseCard;
  