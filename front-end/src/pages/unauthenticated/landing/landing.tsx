import React from 'react';
import NoteModal from '../../../components/note-modal/note-modal';
import BlueButton from '../../../components/blue-button/blue-button';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <NoteModal title="Welcome to My To-Do List Project!">
                <p>This is a simple to-do list application created to showcase my skills with Rust-Axium. It's a demonstration of my ability to build a functional and interactive application using these technologies.</p>
                <br/>
                <p>Feel free to explore and see how the project is structured.</p>
                <br/>
                <Link to={"/login"}>
                    <BlueButton title={"Get Started!"}/>
                </Link>
            </NoteModal>
        </div>
    );
};
