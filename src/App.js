import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistData from "./components/artist/artistData/ArtistData";
import { Api } from "./api/api";
import AlbumData from "./components/album/albumData/AlbumData";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const [artistsData, setArtistsData] = useState([]);
	const [user, setUser] = useState();

	useEffect(() => {
		if (searchValue) {
			Api.getArtist(searchValue).then(({ data }) =>
				setArtistsData(data.artists.items)
			);
		}
	}, [searchValue]);

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header
					setSearchValue={setSearchValue}
					searchValue={searchValue}
				/>

				<Navbar />

				<Routes>
					<Route
						path="/"
						element={
							<Profile
								artistsData={artistsData}
								searchValue={searchValue}
								setUser={setUser}
							/>
						}
					/>

					<Route
						path="artist-data"
						element={<ArtistData artistData={user} />}
					>
						<Route
							path=":artistId"
							element={<ArtistData artistData={user} />}
						/>
					</Route>

					<Route
						path="album-data"
						element={<AlbumData AlbumData={user} />}
					>
						<Route
							path=":albumId"
							element={<AlbumData AlbumData={user} />}
						/>
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
