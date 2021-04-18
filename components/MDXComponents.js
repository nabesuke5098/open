/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";

const CustomLink = (props) => {
    const { href } = props;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props}>{props.children}</a>
            </Link>
        );
    }

    return (
        <a
            target="_blank"
            className="font-semibold hover:text-gray-500 hover:underline"
            rel="noopener noreferrer"
            {...props}>
            {props.children}
        </a>
    );
};

const CustomHeader = (props) => {
    return (
        <h1 className="text-5xl font-bold font-rubik leading-loose" {...props}>
            {props.children}
        </h1>
    );
};

const CustomSubheading = (props) => {
    return (
        <h2 className="text-3xl font-medium font-rubik mt-4 mb-2 md:mt-0 md:mb-0 md:leading-loose" {...props}>
            {props.children}
        </h2>
    );
};

const MDXComponents = {
    h1: CustomHeader,
    h2: CustomSubheading,
    a: CustomLink
};

export default MDXComponents;