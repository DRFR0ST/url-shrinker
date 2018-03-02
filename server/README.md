###API request model

## Add url -- sqlShrink
# expiry is optional, if null then never expires
{
	"exec": [
		[
			"sqlShrink",
			["name", "url"],
			{"expiry": "20.02.2020"}
		]
	]
}

## Resolve shrink -- sqlUnshrink
{
	"exec": [
		[
			"sqlUnshrink",
			["name"],
			{}
		]
	]
}

## Remove url -- sqlRemove
{
	"exec": [
		[
			"sqlRemove",
			["name"],
			{}
		]
	]
}

## List all shrinks -- sqlShrinkList
{
	"exec": [
		[
			"sqlShrinkList",
			[],
			{}
		]
	]
}
