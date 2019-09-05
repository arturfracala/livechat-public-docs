---
weight: 50
---

# Other common structures

Apart from [Events](#events) and [Users](#users), there are also other common data structures you might work with. Those are:

- [Access](#access)
- [Chats](#chats)
- [Chat summary](#chat-summary)
- [Properties](#properties)
- [Threads](#threads)

<!-- A moze w tym miejscu zalinkowac Ban, Sneak peek, Typing Indicator, ktore beda opisane z metodach? -->

## Access

> A sample **Access** data structure

```js
{
"access": {
	"group_ids": [1, 2]
}
}
```

| Field  |      Req./Opt.     |  Note |
|----------|:-------------:|------:|
| `group_ids` |  required | `group 0` means that all agents can see it |

## Chats

> A sample **Chat** data structure

```js
{
        "id": "PJ0MRSHTDG",
        "users": [
            // array of "User" objects
        ],
        "threads": [ // optional
            // "Thread" object
        ],
        "threads_summary": [{
                "thread_id": "K600PKZON8",
                "order": 129846129847
            },
            {
                "thread_id": "K600PKZON8",
                "order": 129846129848
            }
        ],
        "properites": {
            // "Properites" object
        },
        "access": {
            // "Access" object
        },
        "is_followed": true
    }
```

| Field  |      Req./Opt.     |  Note |
|----------|:-------------:|------:|
| `properties` |  optional |  |
| `access` |  optional |  |


## Chat summary


> A sample **Chat summary** data structure 

```js
{
        "id": "PJ0MRSHTDG",
        "users": [
            // array of "User" objects
        ],
        "last_event_per_type": { // last event of each type in chat
            "message": {
                "thread_id": "K600PKZON8",
                "thread_order": 3,
                "event": {
                    // "restricted_access": true
                    // or
                    // "Event > Message" object
                }
            },
            "system_message": {
                "thread_id": "K600PKZON6",
                "thread_order": 1,
                "event": {
                    // "restricted_access": true
                    // or
                    // "Event > System message" object
                }
            },
            ...
        },
        "last_thread_summary": {
            "id": "K600PKZON8",
            "order": 3,
            "timestamp": 1473433500,
            "user_ids": ["agent1@example.com"],
            "properites": {
            // "Properites" object
            },
            "tags": ["bug_report"]
        },
        "properites": {
            // "Properites" object
        },
        "access": {
            // "Access" object
        },
        "is_followed": false
	}
```

**Chat summary** is similar to the **Chat** data structure. The difference is that **Chat** contains a `thread` object, while **Chat summary** includes `last_thread_summary` and `last_event_per_type`.

-----------------------------------------------------------------------------------------

## Properties

> General format of **Properties** 

```js
{
	"<property_namespace>": {
		"<property_name>": {
			"value": <property_value> // <property_value> type depends on the property configuration
		}
	}
}
```
```js
{
    "properties": {
        "routing": {  // namespace
            "pinned": true,  // property name
            "count": 3  // property name
        }
    }
}
```

Properties are **key-value storages**. They can be set within a chat, a thread, or an event. 

--------------------------------------------------------------------------------------------------------------


Properties can be created within a license. They are grouped in `namespaces` to help distinguish which property belongs to a given integration. Your `namespace` is named after your `application id`.

You can configure properties via the [Configuration API](../configuration-api/#properties). It's possible to configure:

- [Property type](#property-type)
- [Property location](#property-location)
- [Property domain](#property-domain)

#### Property type

There are the following property types:

- int (int32)
- bool
- string
- tokenized_string 

**`tokenized_string`** is a string split to tokens before indexing in our search engine. It can be useful for longer strings such as messages. It shouldn't be used for keywords.


> Sample **Properties** 

```js
{
	"properties": {
		"rating": {
			"score": {
				"value": 1
			},
			"comment": {
				"value": "rated good!"
			}
		},
		"routing": {
			"idle": {
				"value": false
			}
		}
	}
}
```



#### Property location
Properties can be set within the following locations:

- chat
- thread
- event

You can configure access to properties within those locations. You could, for example, create a property visible for agents within a chat and a thread, but not within an event. For more details, see [Configuration API](../configuration-api/#properties).

#### Property domain
Property domain is a set of values that property can be assigned to.

Property domain can be configured in two ways:

- by explicitly defining a set of values allowed in this property (e.g. [1, 2, 3]).
- by defining a range with values, which are all allowed in the property. It works only for numeric types (e.g. a range from 1 to 3).





## Thread

> A sample **Thread** data structure

```js
{
	"id": "K600PKZON8",
	"timestamp": 1473433500,
	"active": true,
	"user_ids": ["agent1@example.com"],
	"restricted_access": true,
	"events": [
		// array of "Event" objects
	],
	"order": 112057129857,
	"properties": {
		// "Properties" object
	},
	"access": {
		// "Access" object
	}
}
```

| Field   |      Req./Opt.      |  Note |
|----------|:-------------:|------:|
| `access` | optional |  -   |
| `active` |  ? | values: `true` (thread is still active) or `false`(thread no longer active)|
| `events` | optional |doesn't exists if `restricted_access` is `true`)|
| `properties` |    optional  |  -  |
| `restricted_access` | optional |   -  |
