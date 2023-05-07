import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardShrimming from "./GameCardShrimming";

const Games = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  const shrimmerLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<p>loading.11..</p>}
    >
      {error && <p>{error.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {isLoading &&
          shrimmerLoading.map((shrimmer) => (
            <GameCardShrimming key={shrimmer} />
          ))}
        {error && <p>{error.message}</p>}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCard key={game.id} game={game}></GameCard>
            ))}
          </React.Fragment>
        ))}
        {/* <button className="btn" onClick={() => fetchNextPage()}>
          Load more
        </button> */}
      </div>
    </InfiniteScroll>
  );
};

export default Games;
