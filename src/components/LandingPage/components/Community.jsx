import React from "react";

const Community = () => {
  const communityData = [
    {
      title: "Join Our Fitness Group",
      description: "Connect with fitness enthusiasts and share tips, workouts, and progress!",
      imageUrl: "https://shop.bodybuilding.com/cdn/shop/files/4-_Healthy_Weight.jpg?v=1730345729&width=361",
    },
    {
      title: "Events & Challenges",
      description: "Participate in fitness challenges and events to push your limits.",
      imageUrl: "https://i.pinimg.com/736x/e0/c0/4a/e0c04aee2688ad632aa4eef0b1c9156d.jpg",
    },
    {
      title: "Expert Advice",
      description: "Get expert advice from trainers and nutritionists in our community.",
      imageUrl: "https://i.pinimg.com/736x/e4/7c/2c/e47c2c0c520a03d9ac92d4b798ed82a3.jpg",
    },
    {
      title: "Success Stories",
      description: "Read and share inspiring success stories from fellow members.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJNa8XXJAWgoI3keeqGWwOjSIfTq0QheP6A&s",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12 mt-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Join the Community</h1>
        <p className="text-lg text-gray-700 mt-2">
          Connect with others and reach your fitness goals together.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {communityData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h2>
              <p className="text-gray-600 text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
