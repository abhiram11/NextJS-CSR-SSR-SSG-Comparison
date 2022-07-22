import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Container, FormControl } from "react-bootstrap";

const pokeQuery = async (query) => {
  const { data } = await axios.get(`/api/search?q=${query}`);
  //so we get data, error, isfetching, fallback etc stuff without gonig in nitty gritty
  return data;
};

const queryClient = new QueryClient();

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Head>
          <title>Poke App | Abhi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Container>
            <h1>Lets dev!</h1>
            <FormControl
              placeholder="Poke Search"
              aria-label="poke-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div>{JSON.stringify(data)}</div>
          </Container>
        </main>
      </div>
    </QueryClientProvider>
  );
}
