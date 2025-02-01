import Link from "next/link"

export default function ServicesPage() {
    const data = [
        {
            "id": 1,
            "serviceName": "Web Development",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Professional website development using modern technologies."
        },
        {
            "id": 2,
            "serviceName": "Graphic Design",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Creative and engaging graphic designs for your brand."
        },
        {
            "id": 3,
            "serviceName": "SEO Optimization",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Boost your website's ranking with advanced SEO techniques."
        },
        {
            "id": 4,
            "serviceName": "Digital Marketing",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Comprehensive digital marketing strategies to grow your business."
        },
        {
            "id": 5,
            "serviceName": "Content Writing",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "High-quality, engaging, and SEO-friendly content writing services."
        },
        {
            "id": 6,
            "serviceName": "Mobile App Development",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Custom mobile applications for Android and iOS platforms."
        },
        {
            "id": 7,
            "serviceName": "UI/UX Design",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "User-friendly and visually appealing UI/UX design services."
        },
        {
            "id": 8,
            "serviceName": "Cloud Computing",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Secure and scalable cloud solutions for businesses."
        },
        {
            "id": 9,
            "serviceName": "Cybersecurity",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Protect your business with our expert cybersecurity services."
        },
        {
            "id": 10,
            "serviceName": "E-commerce Solutions",
            "serviceImg": "https://i.ibb.co.com/SDTzmyX/3.png",
            "serviceDescription": "Build and optimize your online store for maximum sales."
        }
    ]


    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((d) => (
                    <Link
                        key={d.id}
                        href={`/services/${d.id}`}
                        className="block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105"
                    >
                        <img
                            src={d.serviceImg}
                            alt={d.serviceName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">{d.serviceName}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}
