import { type NextPage } from "next";
import Header from "../components/Header";
import MainContainer from "../containers/MainContainer";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContainer />
        </div>
    )
}

export default Homepage;