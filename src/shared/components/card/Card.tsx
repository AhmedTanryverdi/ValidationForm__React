import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import "./card.scss";


export const Card: React.FC<{
	id: number;
	thumbnail: string;
	title: string;
	price: number;
	onClick: () => void;
}> = ({ thumbnail, title, price, id, onClick }): React.JSX.Element => {
	const navigate = useNavigate();
	return (
		<div className="card">
			<div className="card__content">
				<img src={thumbnail} alt="image" className="image" />
				<h3 className="title">{title}</h3>
				<p className="price">${price}</p>
			</div>

			<div className="card__btns">
				<Button
					children="Добавить в корзину"
					className="addToCard"
					onClick={() => onClick()}
				/>
				<Button
					children="О товаре"
					className="aboutProduct"
					onClick={() => navigate(`/main/${id}`)}
				/>
			</div>
		</div>
	);
};
