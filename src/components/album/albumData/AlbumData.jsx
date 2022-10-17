import React, { useEffect, useState } from "react";
import style from "./AlbumData.module.css";
import { Api } from "../../../api/api";
import { useParams } from "react-router-dom";

const AlbumData = (props) => {
	const { albumId } = useParams();

	const [albumTracks, setAlbumTracks] = useState([]);

	useEffect(() => {
		if (albumId) {
			Api.getAlbumTracks(albumId).then(({ data: albumData }) => {
				setAlbumTracks(albumData.items);
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

			{albumId && (
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col" style={{ fontSize: "30px" }}>
								Tracks
							</th>
						</tr>
					</thead>

					<tbody>
						<tr className={style.content}>
							{albumTracks.map((track) => (
								<div
									key={track.id}
									className={style.trackItemBlock}
								>
									<h3>{track.name}</h3>

									<audio controls>
										<source
											src={track.preview_url}
											type="audio/ogg"
										/>
										<source
											src={track.preview_url}
											type="audio/mpeg"
										/>
										Your browser does not support the audio
										element.
									</audio>
								</div>
							))}
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};

export default AlbumData;
