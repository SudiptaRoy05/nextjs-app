export default function ServiceDetailsPage({ params }) {
    const data = [
        {
            id: 1,
            serviceName: "Web Development",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Professional website development using modern technologies."
        },
        {
            id: 2,
            serviceName: "Graphic Design",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Creative and engaging graphic designs for your brand."
        },
        {
            id: 3,
            serviceName: "SEO Optimization",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Boost your website's ranking with advanced SEO techniques."
        },
        {
            id: 4,
            serviceName: "Digital Marketing",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Comprehensive digital marketing strategies to grow your business."
        },
        {
            id: 5,
            serviceName: "Content Writing",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "High-quality, engaging, and SEO-friendly content writing services."
        },
        {
            id: 6,
            serviceName: "Mobile App Development",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Custom mobile applications for Android and iOS platforms."
        },
        {
            id: 7,
            serviceName: "UI/UX Design",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "User-friendly and visually appealing UI/UX design services."
        },
        {
            id: 8,
            serviceName: "Cloud Computing",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Secure and scalable cloud solutions for businesses."
        },
        {
            id: 9,
            serviceName: "Cybersecurity",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Protect your business with our expert cybersecurity services."
        },
        {
            id: 10,
            serviceName: "E-commerce Solutions",
            serviceImg: "https://i.ibb.co.com/SDTzmyX/3.png",
            serviceDescription: "Build and optimize your online store for maximum sales."
        }
    ];

    console.log("Params received:", params);
    const id = params?.id;

    if (!id) {
        return <h2 className="text-center text-gray-500 text-2xl mt-10">Loading...</h2>;
    }

    const singleData = data.find(d => d.id == id);

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <img
                src={singleData.serviceImg}
                alt={singleData.serviceName}
                className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-3xl font-bold text-gray-800 mt-4">{singleData.serviceName}</h2>
            <p className="text-gray-600 mt-2 text-lg leading-relaxed">
                {singleData.serviceDescription}
            </p>
        </div>
    );
}
