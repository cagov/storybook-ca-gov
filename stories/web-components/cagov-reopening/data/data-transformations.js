```
{ slug: 'reopening-matrix-data', split: true, tableSchema: {
    Table1: {
      require: ['colorLabel','_Color label','New cases','Positive tests','description','County tier']
    },
    Table2: {
      pivot: true,
      require: [
        'Header – county risk level',
        'Header – new cases',
        'Header – positive tests',
        'Description – new cases',
        'Description – positive cases'
    ]}
  }},
  { slug: 'safer-economy-lang', split: true, tableSchema: {
    Table1: {
      pivot: true,
      require: [
        'title',
        'activityLabel'
    ]}
  }},
  { slug: 'reopening-roadmap-activity-data', split: true },
  { slug: 'menu-links', split: true, tableSchema: {
    Table1: {
      require: ['_section_index','label']
    },
    Table2: {
      require: ['_section_index','label','_slug_or_url']}
    } 
  }
];
```