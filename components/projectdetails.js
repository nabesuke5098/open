import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

export default function Modal({
    owner,
    title,
    type,
    thumbnail,
    profileIcon,
    award,
    description,
    handleKeyDown
}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div
                className="py-4 focus:outline-none focus:border-gray-100"
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={() => setShowModal(true)}>
                <div
                    style={{ borderColor: award }}
                    className="rounded-xl h-52 w-3/4 overflow-hidden border-4 mx-auto">
                    <img src={thumbnail} alt="featured project" />
                </div>
                <div className="flex flex-row pt-4 justify-around">
                    <div className="flex flex-col">
                        <h2 className="font-rubik font-medium text-xl">{title}</h2>
                        <div className="flex flex-row">
                            <p className="font-mono">
                                {owner} • {type}
                            </p>
                        </div>
                    </div>
                    <a href={`https://github.com/${owner}`}>
                        <img src={profileIcon} className="rounded-full h-12 w-12 float-right" alt="Profile" />
                    </a>
                </div>
            </div>
            {showModal ? (
                <AnimatePresence>
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-50 max-w-xl my-auto mx-auto">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-auto max-h-96 md:max-h-full">
                                {/* Modal header */}
                                <div className="flex flex-col justify-center w-full pt-12 pb-5 px-5 space-y-3 bg-blue rounded-t-lg">
                                    <div className="flex justify-end px-4">
                                        <a
                                            key={title}
                                            href={`https://github.com/${owner}/${title}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:text-gray-500 rounded-full">
                                            <FiGithub size={30} />
                                        </a>
                                    </div>

                                    <div className="flex flex-col space-y-3">
                                        <h3 className="text-5xl font-rubik font-medium text-center">
                                            {title}
                                        </h3>
                                        <div className="flex flex-row items-center justify-center space-x-2 pb-3">
                                            <a
                                                href={`https://github.com/${owner}`}
                                                target="_blank"
                                                rel="noreferrer">
                                                <img
                                                    src={profileIcon}
                                                    alt="GitHub user profile"
                                                    className="w-8 h-8 rounded-full"
                                                />
                                            </a>
                                            <p className="font-mono text-xl">{owner}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Repo Description */}
                                <div className="relative p-6">
                                    <p className="my-4 font-rubik font-light text-lg leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                                {/* Modal Footer */}
                                <div className="flex items-center justify-end p-6">
                                    <button
                                        className="text-gray-500 font-rubik font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div
                        className="opacity-25 fixed inset-0 bg-black z-0"
                        onKeyDown={handleKeyDown}
                        onClick={() => setShowModal(false)}
                    />
                </AnimatePresence>
            ) : null}
        </div>
    );
}
