import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { ApiError } from '../../app/types/errorTypes'

type Props = {
	typedError: ApiError | undefined
}

export const ErrorSnackBar = ({ typedError }: Props) => {
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		if (typedError) {
			setErrorMessage(typedError.data?.message || 'Произошла ошибка!')
			setOpenSnackbar(true)
		}
	}, [typedError])

	const handleCloseSnackbar = (
		_event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}
		setOpenSnackbar(false)
	}
	return (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={6000}
			onClose={handleCloseSnackbar}
		>
			<Alert
				onClose={handleCloseSnackbar}
				severity='error'
				sx={{ width: '100%' }}
			>
				{errorMessage}
			</Alert>
		</Snackbar>
	)
}
