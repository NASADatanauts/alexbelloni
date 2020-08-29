define({ "api": [
  {
    "type": "post",
    "url": "/project",
    "title": "Add a new Project",
    "name": "AddProject",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "Object",
            "optional": false,
            "field": "Project",
            "description": "<p>Same object on Response of the GetProject method</p>"
          }
        ]
      }
    },
    "description": "<p>Adds a new project</p>",
    "group": "Project",
    "examples": [
      {
        "title": "Example usage:",
        "content": "/project",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n           \"id\": \"68a319a0-460d-11ea-8648-3fc2c9cf3444\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/project/:id",
    "title": "Delete a Project",
    "name": "DeleteProject",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "description": "<p>This is the Description. It is multiline capable.</p> <p>Last line of Description.</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/project/68a319a0-460d-11ea-8666-3fc2c9cf3444",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n           \"id\": \"68a319a0-460d-11ea-8648-3fc2c9cf3444\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/:id",
    "title": "Get a specific Project",
    "name": "GetProject",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "description": "<p>Gets a project based on id</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/project/68a319a0-460d-11ea-8648-3fc2c9cf3444",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the project's page</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "year",
            "description": "<p>Year of submition</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "challenge",
            "description": "<p>Challenge of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "content",
            "description": "<p>Complete description of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "links",
            "description": "<p>Links used to develop the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "prize",
            "description": "<p>Prize received</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n            \"name\": \"Datanauts\",\n            \"link\": \"https://2018.spaceappschallenge.org/challenges/can-you-build/when-next-rocket-launch/teams/datanauts\",\n            \"year\": 2018,\n            \"category\": \"can-you-build\",\n            \"challenge\": \"when-next-rocket-launch\",\n            \"content\": \"Menu Space Apps Challenge 2018 Awards Locations Challenges About News Judging Login Signup Contact Us Legal Privacy Policy DATANAUTS | DO YOU KNOW WHEN THE NEXT ROCKET LAUNCH IS? Virtual Participation UpdatesProjectMembers THE CHALLENGE | DO YOU KNOW WHEN THE NEXT ROCKET LAUNCH IS? Create a tool to track international rocket launch information. ROCKET FOLLOWERS See and watch launches, its spaceports, reentries and statistics. Keep following rockets! Do You Know When the Next Rocket Launch Is? How could I watch a rocket launch in person or online? Launches are awesome but losing this event could be terrible. The Datanauts team built Rocket Followers which is a solution to know launches details, its spaceports, transmissions, statistics, and its reentries. We created it by using a large group of APIs and datasets, linking this information. Now, you can plan your trip or save the date to watch it online, using a friendly and intuitive tool. Demo: http://alexandrebelloni.com/spaceapps2018/ repository: https://github.com/alexbelloni/orbital-perspective Resources: https://reactjs.org/ https://nodejs.org/en/ https://dashboard.heroku.com https://www.nasa.gov/launchschedule/ https://www.nasa.gov/centers/kennedy/launchingrock... http://ceos.org/about-ceos/agencies/ http://database.eohandbook.com/database/missiontab... https://www.space-track.org http://www.celestrak.com https://watchrockets.com/ https://launchlibrary.net https://fontawesome.com https://www.iconfinder.com/Field5 under Attribution 3.0 Unported (CC BY 3.0) SpaceApps is a NASA incubator innovation program. About News Contact Us LegalPrivacy Policy\",\n            \"links\": [\n                \"http://alexandrebelloni.com/spaceapps2018\",\n                \"https://github.com/alexbelloni/orbital-perspective\",\n                \"https://reactjs.org\",\n                \"https://nodejs.org/en\",\n                \"https://dashboard.heroku.com\",\n                \"https://www.nasa.gov/launchschedule\",\n                \"https://www.nasa.gov/centers/kennedy/launchingrockets/viewing.html\",\n                \"http://ceos.org/about-ceos/agencies\",\n                \"http://database.eohandbook.com/database/missiontable.aspx\",\n                \"https://www.space-track.org\",\n                \"http://www.celestrak.com\",\n                \"https://watchrockets.com\",\n                \"https://launchlibrary.net\",\n                \"https://fontawesome.com\",\n                \"https://www.iconfinder.com/Field5\"\n            ],\n            \"prize\": null \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/projects/:keyword/:perpage/:page",
    "title": "Get Projects",
    "name": "GetProjects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Gets projects based on a keyword</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>4+ length word</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "perpage",
            "description": "<p>number of result per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>current page</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/projects/datanauts/50/0",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the project's page</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "year",
            "description": "<p>Year of submition</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "challenge",
            "description": "<p>Challenge of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "content",
            "description": "<p>Complete description of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "links",
            "description": "<p>Links used to develop the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "prize",
            "description": "<p>Prize received</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "content_raw",
            "description": "<p>Raw content of the project's page</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Number of the current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "nPages",
            "description": "<p>Number of the pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "total",
            "description": "<p>Total of the project based on the keyword</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"projects\": [\n        {\n            \"id\": \"68a319a0-460d-11ea-8648-3fc2c9cf3444\",\n            \"name\": \"Datanauts\",\n            \"link\": \"https://2018.spaceappschallenge.org/challenges/can-you-build/when-next-rocket-launch/teams/datanauts\",\n            \"year\": 2018,\n            \"category\": \"can-you-build\",\n            \"challenge\": \"when-next-rocket-launch\",\n            \"content\": \"Menu Space Apps Challenge 2018 Awards Locations Challenges About News Judging Login Signup Contact Us Legal Privacy Policy DATANAUTS | DO YOU KNOW WHEN THE NEXT ROCKET LAUNCH IS? Virtual Participation UpdatesProjectMembers THE CHALLENGE | DO YOU KNOW WHEN THE NEXT ROCKET LAUNCH IS? Create a tool to track international rocket launch information. ROCKET FOLLOWERS See and watch launches, its spaceports, reentries and statistics. Keep following rockets! Do You Know When the Next Rocket Launch Is? How could I watch a rocket launch in person or online? Launches are awesome but losing this event could be terrible. The Datanauts team built Rocket Followers which is a solution to know launches details, its spaceports, transmissions, statistics, and its reentries. We created it by using a large group of APIs and datasets, linking this information. Now, you can plan your trip or save the date to watch it online, using a friendly and intuitive tool. Demo: http://alexandrebelloni.com/spaceapps2018/ repository: https://github.com/alexbelloni/orbital-perspective Resources: https://reactjs.org/ https://nodejs.org/en/ https://dashboard.heroku.com https://www.nasa.gov/launchschedule/ https://www.nasa.gov/centers/kennedy/launchingrock... http://ceos.org/about-ceos/agencies/ http://database.eohandbook.com/database/missiontab... https://www.space-track.org http://www.celestrak.com https://watchrockets.com/ https://launchlibrary.net https://fontawesome.com https://www.iconfinder.com/Field5 under Attribution 3.0 Unported (CC BY 3.0) SpaceApps is a NASA incubator innovation program. About News Contact Us LegalPrivacy Policy\",\n            \"links\": [\n                \"http://alexandrebelloni.com/spaceapps2018\",\n                \"https://github.com/alexbelloni/orbital-perspective\",\n                \"https://reactjs.org\",\n                \"https://nodejs.org/en\",\n                \"https://dashboard.heroku.com\",\n                \"https://www.nasa.gov/launchschedule\",\n                \"https://www.nasa.gov/centers/kennedy/launchingrockets/viewing.html\",\n                \"http://ceos.org/about-ceos/agencies\",\n                \"http://database.eohandbook.com/database/missiontable.aspx\",\n                \"https://www.space-track.org\",\n                \"http://www.celestrak.com\",\n                \"https://watchrockets.com\",\n                \"https://launchlibrary.net\",\n                \"https://fontawesome.com\",\n                \"https://www.iconfinder.com/Field5\"\n            ],\n            \"prize\": null,\n            \"content_raW\": \"Menu\\r\\nSpace Apps Challenge 2018\\r\\nAwards\\r\\nLocations\\r\\nChallenges\\r\\nAbout\\r\\nNews\\r\\nJudging\\r\\nLogin\\r\\nSignup\\r\\nContact Us\\r\\nLegal\\r\\nPrivacy Policy\\r\\nDATANAUTS | DO YOU KNOW WHEN THE NEXT ROCKET LAUNCH IS?\\r\\nVirtual Participation\\r\\nUpdatesProjectMembers\\r\\nTHE CHALLENGE | DO YOU KNOW WHEN THE NEXT ROCKET LAUNCH IS?\\r\\nCreate a tool to track international rocket launch information.\\r\\nROCKET FOLLOWERS\\r\\nSee and watch launches, its spaceports, reentries and statistics. Keep following rockets!\\r\\n\\r\\nDo You Know When the Next Rocket Launch Is?\\r\\n\\r\\nHow could I watch a rocket launch in person or online?\\r\\n\\r\\nLaunches are awesome but losing this event could be terrible.\\r\\n\\r\\nThe Datanauts team built &quot;Rocket Followers&quot; which is a solution to know launches&quot; details, its spaceports, transmissions, statistics, and its reentries.\\r\\n\\r\\nWe created it by using a large group of APIs and datasets, linking this information.\\r\\n\\r\\nNow, you can plan your trip or save the date to watch it online, using a friendly and intuitive tool.\\r\\n\\r\\nDemo:\\r\\n\\r\\nhttp://alexandrebelloni.com/spaceapps2018/\\r\\n\\r\\nrepository:\\r\\n\\r\\nhttps://github.com/alexbelloni/orbital-perspective\\r\\n\\r\\nResources:\\r\\n\\r\\nhttps://reactjs.org/\\r\\n\\r\\nhttps://nodejs.org/en/\\r\\n\\r\\nhttps://dashboard.heroku.com\\r\\n\\r\\nhttps://www.nasa.gov/launchschedule/\\r\\n\\r\\nhttps://www.nasa.gov/centers/kennedy/launchingrock...\\r\\n\\r\\nhttp://ceos.org/about-ceos/agencies/\\r\\n\\r\\nhttp://database.eohandbook.com/database/missiontab...\\r\\n\\r\\nhttps://www.space-track.org\\r\\n\\r\\nhttp://www.celestrak.com\\r\\n\\r\\nhttps://watchrockets.com/\\r\\n\\r\\nhttps://launchlibrary.net\\r\\n\\r\\nhttps://fontawesome.com\\r\\n\\r\\nhttps://www.iconfinder.com/Field5 under Attribution 3.0 Unported (CC BY 3.0)\\r\\n\\r\\nSpaceApps is a NASA incubator innovation program.\\r\\n\\r\\nAbout\\r\\nNews\\r\\nContact Us\\r\\nLegalPrivacy Policy\"\n        }\n    ],\n    \"page\": 0,\n    \"nPages\": 1,\n    \"total\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/project/:id",
    "title": "Update a Project",
    "name": "UpdateProject",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "Object",
            "optional": false,
            "field": "Project",
            "description": "<p>Same object on Response of the GetProject method</p>"
          }
        ]
      }
    },
    "description": "<p>Updates a project based on id</p>",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/project/68a319a0-460d-11ea-8666-3fc2c9cf3444",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>GUID identification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n           \"id\": \"68a319a0-460d-11ea-8648-3fc2c9cf3444\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/app.js",
    "groupTitle": "Project"
  }
] });
