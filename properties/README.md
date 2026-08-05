# Properties

Each property receives its own self-contained production workspace:

```text
properties/
└── property-slug/
    ├── 00-original-images/
    ├── 01-selected-images/
    ├── 02-reference/
    ├── 03-generated-clips/
    ├── 04-edit/
    ├── 05-review/
    └── 06-final/
```

`caldeira-estate/` is the first property workspace. Original source media stays local and is excluded from Git unless its rights are verified for publication.
