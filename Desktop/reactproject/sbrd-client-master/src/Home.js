import bgImage from "./studentshome.webp"; // Ensure this path is correct

const Home = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent black
					padding: "30px 50px",
					borderRadius: "12px",
					color: "white",
					textAlign: "center",
					position: "relative",
					top: "-10%", // moves the tile slightly up
					boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
				}}
			>
				<h1 style={{ marginBottom: "10px" }}>Welcome to Student Info Portal</h1>
				<p>View, edit, and manage student data with ease.</p>
			</div>
		</div>
	);
};

export default Home;
