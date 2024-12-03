import { useEffect, useState } from 'react'

import classNames from 'classnames'
import styles from './VideoPlayer.module.css'

export const VideoPlayer = () => {
	const [scriptHtml, setScriptHtml] = useState('')

	useEffect(() => {
		const dataUrl = window.location.href

		fetch(
			`//js.espanplay.site/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=` +
				dataUrl
		)
			.then(res => {
				if (!res.ok) {
					throw new Error('Failed to fetch the player')
				}
				return res.text()
			})
			.then(data => {
				const iframeMatch = data.match(/<iframe.*<\/iframe>/gm)
				if (iframeMatch && iframeMatch[0]) {
					setScriptHtml(iframeMatch[0])
					console.error('Iframe not found in the response')
				}
			})
			.catch(error => {
				console.error('Error fetching player script:', error)
			})
	}, [])

	return (
		<div
			className={classNames('uitools', styles.video)}
			id='videoplayers'
			dangerouslySetInnerHTML={{ __html: scriptHtml }}
		></div>
	)
}
