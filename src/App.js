import '../src/assets/styles/app.scss';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DashboardContainer from './features/dashboard/container/dashboardContainer';
import FindYourWare from './features/findYourWare/container/findYourWare';
import ProductDetails from './features/productDetails/container/productDetails';
import AllProductsContainer from './features/allProducts/container/allProductsContainer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardContainer />} />
				<Route path="/product" element={<AllProductsContainer />} />
				<Route path="/home" element={<DashboardContainer />} />
				<Route path="/dashboard" element={<DashboardContainer />} />
				<Route path="/allProducts" element={<AllProductsContainer />} />
				<Route path="/findYourWare" element={<FindYourWare />} />
				<Route
					path="/productDetails/:id"
					element={<ProductDetails />}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
