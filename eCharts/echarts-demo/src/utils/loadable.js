import React from 'react';
import { Loading } from '@alifd/next';
import Loadable from 'react-loadable';

const loadingComponent = () => {
	console.log('loading---');
	return <Loading tip="loading2..." fullScreen />;
};

export default (loader, loading = loadingComponent) => {
	return Loadable({
		loader,
		loading,
	});
};
