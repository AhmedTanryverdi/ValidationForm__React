import React, { useRef } from "react";
import { RootState, useAppDispatch } from "../../shared/utils/types/types";
import { Card } from "../../shared/components/card/Card";
import { useProductFetch, useScroll } from "./utils/hooks";
import loading from "../../shared/assets/icons/loading.png";
import { useSelector } from "react-redux";
import { addToCart } from "../../shared/utils/functions/functions";
import "./main.scss";
import { setColor } from "../../entities/model/slices/cartSlice";

export const Main: React.FC = (): React.JSX.Element => {
	const childRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	const filter = useSelector<RootState, string>(
		(state) => state.filter.textInput
	);

	const { products, isLoading, hasMore, fetchNextPage } =
		useProductFetch(filter);

	useScroll(childRef, isLoading, hasMore, fetchNextPage);

	return (
		<div className="main">
			<div className="container">
				<div className="product-list">
					{products.map((product) => {
						return (
							<Card
								key={product.id}
								{...product}
								onClick={() => {
									addToCart(product);
									dispatch(setColor("green"));
								}}
							/>
						);
					})}
					<div className="product-item" ref={childRef}>
						{hasMore && (
							<img
								src={loading}
								className="img"
								alt="loading icon"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
