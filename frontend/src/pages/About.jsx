import React from 'react';
// import myvideo from '../video/ProjectIntro.mp4';
function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[40rem] bg-gray-100 mt-4">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Blog Market</h1>
                <video className="w-full h-auto  mb-8" controls>
                    <source src={""} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p class="text-gray-700 text-base text-center mb-8">
                    Welcome to Blog Market, a vibrant online community where you can connect with fellow creators and passionate individuals! Share your thoughts, experiences, and expertise through engaging blog posts. Explore a diverse range of topics, discover new perspectives, and join meaningful conversations.
                </p>
                <p class="text-gray-700 text-base text-center mb-8">
                    Blog Market empowers you to be a part of something bigger. Register for a free account and embark on your blogging journey. Login to create insightful posts, curate your own blog space, and express your unique voice.
                </p>
            </div>
        </div>
    );
}

export default About;