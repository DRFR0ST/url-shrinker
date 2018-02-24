###API request model

## Add url -- sqlShrink
{
	"exec": [
		[
			"sqlShrink",
			[],
			{"name", "url"}
		]
	]
}

## Resolve shrink -- sqlUnshrink

{
	"exec": [
		[
			"sqlUnshrink",
			[],
			{"name", "url"}
		]
	]
}

## Remove url -- sqlRemove
{
	"exec": [
		[
			"sqlRemove",
			[],
			{"name", "url"}
		]
	]
}
