export interface IActivity {

	id: number
	name: string
	date: Date
	comments?: string //optional with ?
	distance?: number
	gpxData: string //gpx is XML format. Change to geoJSON

}