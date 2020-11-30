import React from 'react'
import { Loading } from '@alifd/next'
import Loadable from 'react-loadable'

const loadingComponent = () => {
	return <Loading tip='loading...' fullScreen />
}

export default (loader, loading = loadingComponent) => {
	return Loadable({
		loader,
		loading,
	})
}
