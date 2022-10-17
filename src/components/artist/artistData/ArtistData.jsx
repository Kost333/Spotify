import React, { useEffect, useState } from "react";
import style from "./ArtistData.module.css";
import { Api } from "../../../api/api";
import { useParams } from "react-router-dom";
import AlbumCard from "../../album/albumCard/AlbumCard";

const ArtistData = (props) => {
	const { artistId } = useParams();

	const [albumsData, setAlbumsData] = useState([]);

	useEffect(() => {
		if (artistId) {
			Api.getArtistsAlbums(artistId).then(({ data: albumsData }) => {
				setAlbumsData(albumsData.items);
			});
		}
	}, []);

	return (
		<div className={style.content}>
			<div
				className={style.header}
				style={{
					backgroundImage: `url(${props?.user?.images?.[0]?.url})`,
				}}
			>
				<h5
					style={{
						fontSize: "18px",
						fontWeight: "bold",
						opacity: "0.4",
					}}
				>
					PUBLIC PLAYLIST
				</h5>
				<h2
					style={{
						fontSize: "48px",
						fontWeight: "bold",
						opacity: "0.4",
					}}
				>
					TOP TITRES 2022
				</h2>
			</div>

			{artistId && (
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col" style={{ fontSize: "30px" }}>
								Albums
							</th>
						</tr>
					</thead>

					<tbody>
						<tr className={style.content}>
							{albumsData.map((album) => (
								<div
									key={album.id}
									className={style.trackItemBlock}
								>
									<AlbumCard albumData={album} />
								</div>
							))}
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};

export default ArtistData;
