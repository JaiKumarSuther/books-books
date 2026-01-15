export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    day: string;
    month: string;
    category: string;
    author: string;
    comments: number;
}

export const blogs: BlogPost[] = [
    {
        id: "study-tips-for-success",
        title: "Top 10 Study Tips for Academic Success",
        excerpt: "Discover the best ways to improve your focus, manage your time, and get better grades this semester with these proven strategies. Achieving academic success isn't just about intelligence; it's about strategy, consistency, and efficient study habits.",
        content: `
            <p className="mb-4">Achieving academic success isn't just about intelligence; it's about strategy, consistency, and efficient study habits. Whether you're in high school or university, mastering these skills can significantly boost your performance.</p>
            <h3 className="text-xl font-bold mb-2">1. Create a Study Schedule</h3>
            <p className="mb-4">Consistency is key. set aside specific times each day for studying different subjects. This helps condition your brain to focus.</p>
            <h3 className="text-xl font-bold mb-2">2. Organize Your Study Space</h3>
            <p className="mb-4">A cluttered desk leads to a cluttered mind. Ensure your workspace is clean, well-lit, and free from distractions.</p>
        `,
        image: "/blog-study-tips.png",
        date: "Oct 12, 2023",
        day: "12",
        month: "Oct",
        category: "Study Tips",
        author: "John Doe",
        comments: 0
    },
    {
        id: "essential-school-supplies",
        title: "Essential School Supplies Checklist",
        excerpt: "Don't miss a thing! Here is the ultimate checklist for school supplies to ensure you are fully prepared for the upcoming academic year. Heading back to school is exciting, but forgetting essential supplies can be stressful.",
        content: `
            <p className="mb-4">Heading back to school is exciting, but forgetting essential supplies can be stressful. We've compiled the ultimate checklist to ensure you have everything you need.</p>
            <h3 className="text-xl font-bold mb-2">The Basics</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Notebooks (ruled and unruled)</li>
                <li>Pens (Blue, Black, and Red)</li>
                <li>Pencils and Erasers</li>
            </ul>
        `,
        image: "/blog-school-supplies.png",
        date: "Sep 05, 2023",
        day: "05",
        month: "Sep",
        category: "Guides",
        author: "Jane Smith",
        comments: 2
    },
    {
        id: "benefits-of-extra-curriculars",
        title: "Why Extra-Curriculars Matter",
        excerpt: "Beyond the classroom: How sports, arts, and clubs contribute to a well-rounded education and personal growth. Education is more than just grades. Participating in extra-curricular activities plays a crucial role in personal development.",
        content: `
            <p className="mb-4">Education is more than just grades. Participating in extra-curricular activities plays a crucial role in personal development.</p>
            <h3 className="text-xl font-bold mb-2">Building Soft Skills</h3>
            <p className="mb-4">Clubs and sports teams teach teamwork, leadership, and communication skills that are invaluable in the real world.</p>
        `,
        image: "/blog-happy-students.png",
        date: "Aug 20, 2023",
        day: "20",
        month: "Aug",
        category: "Lifestyle",
        author: "Mike Ross",
        comments: 5
    },
    {
        id: "healthy-lunch-ideas",
        title: "5 Healthy Lunch Ideas for School",
        excerpt: "Fuel your body and mind with these delicious, nutritious, and easy-to-pack lunch ideas that will keep you energized throughout the school day. Proper nutrition is the foundation of learning.",
        content: `
            <p className="mb-4">Fuel your body and mind with these delicious and nutritious lunch ideas. Proper nutrition is the foundation of learning.</p>
            <h3 className="text-xl font-bold mb-2">1. The Classic Bento</h3>
            <p className="mb-4">A mix of colorful fruits, veggies, and a protein-packed sandwich.</p>
        `,
        image: "/blog_healthy_lunch_1768481777922.png",
        date: "Jul 15, 2023",
        day: "15",
        month: "Jul",
        category: "Health",
        author: "Sarah Lee",
        comments: 8
    },
    {
        id: "importance-physical-education",
        title: "The Importance of Physical Education",
        excerpt: "Physical activity is just as important as mental exercise. Learn why PE classes are vital for student health, focus, and overall well-being. Keeping active helps reduce stress and improve concentration.",
        content: `
            <p className="mb-4">Physical activity is just as important as mental exercise. Keeping active helps reduce stress and improve concentration.</p>
            <h3 className="text-xl font-bold mb-2">Focus and Concentration</h3>
            <p className="mb-4">Studies show that regular exercise improves focus and cognitive function.</p>
        `,
        image: "/blog_physical_education_1768481794201.png",
        date: "Jun 10, 2023",
        day: "10",
        month: "Jun",
        category: "Sports",
        author: "Tom Baker",
        comments: 3
    },
    {
        id: "digital-learning-pros-cons",
        title: "Digital Learning: Pros and Cons",
        excerpt: "As technology integrates into classrooms, we explore the benefits and challenges of digital learning tools for modern students. From interactive tablets to distraction management.",
        content: `
            <p className="mb-4">As technology integrates into classrooms, we explore the benefits and challenges of digital learning tools.</p>
            <h3 className="text-xl font-bold mb-2">Access to Information</h3>
            <p className="mb-4">The internet provides instant access to the world's knowledge bank.</p>
        `,
        image: "/blog_digital_learning_1768481810846.png",
        date: "May 25, 2023",
        day: "25",
        month: "May",
        category: "Tech",
        author: "Emily Chen",
        comments: 12
    }
];
