import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const Technologies = ({calculatedWidthTechnologies, calculatedHeightTechnologies, smallerCalculatedWidthTechnologies, imgSrc, imgAlt, first}) => {
	var color = first ? "transparent" : "black";
	return (
		<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px" }}>
			<Box sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				width: calculatedWidthTechnologies,
				height: calculatedHeightTechnologies
			}}>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[0]}
							src={imgSrc[0]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[1]}
							src={imgSrc[1]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies,
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[2]}
							src={imgSrc[2]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[3]}
							src={imgSrc[3]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[4]}
							src={imgSrc[4]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[5]}
							src={imgSrc[5]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[6]}
							src={imgSrc[6]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[7]}
							src={imgSrc[7]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
						paddingRight: "16px",
					}}
				/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: calculatedHeightTechnologies,
					height: calculatedHeightTechnologies,
					paddingRight: "16px"
				}}>
					<div
						style={{
							borderTop: `1.5px solid transparent`,
							paddingBottom: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
					<Box sx={{
						height: smallerCalculatedWidthTechnologies,
						width: smallerCalculatedWidthTechnologies
					}}>
						<Img
							alt={imgAlt[8]}
							src={imgSrc[8]}
							sx={{ height: smallerCalculatedWidthTechnologies, width: smallerCalculatedWidthTechnologies }}
						/>
					</Box>
					<div
						style={{
							borderBottom: `1.5px solid ${color}`,
							paddingTop: "16px",
							width: smallerCalculatedWidthTechnologies
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidthTechnologies,
						paddingTop: "16px",
						paddingBottom: "16px",
					}}
				/>
			</Box>
		</section>
	);
};

export default Technologies;
