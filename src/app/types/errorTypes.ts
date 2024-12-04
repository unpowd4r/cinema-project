type ErrorData = {
	message: string
}

export type ApiError = {
	status: number
	data: ErrorData
}
