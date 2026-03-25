using KameraAnbindungService from './service';

// --- USERS ---
annotate KameraAnbindungService.Users with @(
    Capabilities.InsertRestrictions: { Insertable: true },

    UI.LineItem: [
        { Value: firstName, Label: 'Vorname' },
        { Value: lastName,  Label: 'Nachname' },
        { Value: eMail,     Label: 'E-Mail' },
        { Value: role,      Label: 'Rolle' }
    ],

    UI.SelectionFields: [ firstName, lastName, eMail, role ],

    UI.FieldGroup #General: {
        Data: [
            { Value: firstName, Label: 'Vorname' },
            { Value: lastName,  Label: 'Nachname' },
            { Value: eMail,     Label: 'E-Mail' },
            { Value: role,      Label: 'Rolle' }
        ]
    },

    UI.FieldGroup #Unternehmen: {
        Data: [
            { Value: unternehmen_ID, Label: 'Unternehmen' }
        ]
    },

    // Reservierungen als bearbeitbare Tabelle im User-Formular
    UI.LineItem #Reservations: [
        { Value: startTime,  Label: 'Von' },
        { Value: endTime,    Label: 'Bis' },
        { Value: status,     Label: 'Status' },
        { Value: vehicle_ID, Label: 'Fahrzeug' }
    ],

    // Access Logs als read-only Tabelle im User-Formular
    UI.LineItem #AccessLogs: [
        { Value: createdAt,  Label: 'Zeitpunkt' },
        { Value: action,     Label: 'Aktion' },
        { Value: entityName, Label: 'Entity' },
        { Value: role,       Label: 'Rolle' }
    ],

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Allgemein',      Target: '@UI.FieldGroup#General' },
        { $Type: 'UI.ReferenceFacet', Label: 'Unternehmen',    Target: '@UI.FieldGroup#Unternehmen' },
        { $Type: 'UI.ReferenceFacet', Label: 'Reservierungen', Target: 'reservations/@UI.LineItem' },
        { $Type: 'UI.ReferenceFacet', Label: 'Access Logs',    Target: 'accessLogs/@UI.LineItem' }
    ]
);

annotate KameraAnbindungService.Users with {
    ID           @UI.Hidden;
    createdAt    @UI.Hidden;
    createdBy    @UI.Hidden;
    modifiedAt   @UI.Hidden;
    modifiedBy   @UI.Hidden;
};

// Unternehmensname statt GUID anzeigen + Auswahlliste
annotate KameraAnbindungService.Users:unternehmen with @(
    Common.Text            : unternehmen.name,
    Common.TextArrangement : #TextOnly,
    Common.ValueList : {
        $Type          : 'Common.ValueListType',
        CollectionPath : 'Company',
        Parameters     : [
            {
                $Type             : 'Common.ValueListParameterOut',
                LocalDataProperty : unternehmen_ID,
                ValueListProperty : 'ID'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'name'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'eMail'
            }
        ]
    },
    Common.ValueListWithFixedValues : false
);

// --- VEHICLES ---
annotate KameraAnbindungService.Vehicles with @(
    Capabilities.InsertRestrictions: { Insertable: true },

    UI.LineItem: [
        { Value: licencePlate, Label: 'Kennzeichen' },
        { Value: user_ID,      Label: 'Benutzer-ID' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: licencePlate, Label: 'Kennzeichen' },
            { Value: user_ID,      Label: 'Benutzer-ID' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Fahrzeug', Target: '@UI.FieldGroup#General' }
    ]
);

// --- COMPANY ---
annotate KameraAnbindungService.Company with @(
    Capabilities.InsertRestrictions: { Insertable: true },

    UI.LineItem: [
        { Value: name,  Label: 'Name' },    // FIX: war "Name" (Großschreibung)
        { Value: eMail, Label: 'E-Mail' },
        { Value: telefon, Label: 'Telefon' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: name,    Label: 'Name' },    // FIX: war "Name"
            { Value: eMail,   Label: 'E-Mail' },
            { Value: telefon, Label: 'Telefon' },
            { Value: fax,     Label: 'Fax' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Unternehmen', Target: '@UI.FieldGroup#General' }
    ]
);

// --- CAMERAS ---
annotate KameraAnbindungService.Cameras with @(
    Capabilities.InsertRestrictions: { Insertable: true },

    UI.LineItem: [
        { Value: name,      Label: 'Name' },
        { Value: ipAddress, Label: 'IP-Adresse' },  // FIX: war ipAdress
        { Value: location,  Label: 'Standort' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: name,       Label: 'Name' },
            { Value: ipAddress,  Label: 'IP-Adresse' },  // FIX: war ipAdress
            { Value: location,   Label: 'Standort' },
            { Value: macAddress, Label: 'MAC-Adresse' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Kamera', Target: '@UI.FieldGroup#General' }
    ]
);

// --- CAMERA EVENTS ---
annotate KameraAnbindungService.CameraEvents with @(
    Capabilities: {
        InsertRestrictions: { Insertable: false },
        DeleteRestrictions: { Deletable:  false },
        UpdateRestrictions: { Updatable:  false }
    },

    UI.PresentationVariant: {
        SortOrder:      [{ Property: createdAt, Descending: true }],
        Visualizations: ['@UI.LineItem']
    },

    UI.LineItem: [
        { Value: eventType,       Label: 'Event-Typ' },
        { Value: sourceDeviceId,  Label: 'Quellgerät' },
        { Value: timestamp,       Label: 'Zeitstempel' },
        { Value: plateNormalized, Label: 'Kennzeichen' },
        { Value: confidence,      Label: 'Confidence' },
        { Value: status,          Label: 'Status' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: eventType,       Label: 'Event-Typ' },
            { Value: sourceDeviceId,  Label: 'Quellgerät' },
            { Value: timestamp,       Label: 'Zeitstempel' },
            { Value: plateNormalized, Label: 'Kennzeichen' },
            { Value: confidence,      Label: 'Confidence' },
            { Value: payloadVersion,  Label: 'Payload-Version' },
            { Value: status,          Label: 'Status' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Event-Details', Target: '@UI.FieldGroup#General' }
    ]
);

// --- SESSION ---
annotate KameraAnbindungService.Session with @(
    Capabilities.InsertRestrictions: { Insertable: true },

    UI.LineItem: [
        { Value: vehicle_ID,  Label: 'Fahrzeug' },
        { Value: entryTime,   Label: 'Einfahrt' },
        { Value: exitTime,    Label: 'Ausfahrt' },
        { Value: totalAmount, Label: 'Betrag' },
        { Value: status,      Label: 'Status' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: vehicle_ID,  Label: 'Fahrzeug' },
            { Value: entryTime,   Label: 'Einfahrt' },
            { Value: exitTime,    Label: 'Ausfahrt' },
            { Value: duration,    Label: 'Dauer (min)' },
            { Value: totalAmount, Label: 'Betrag' },
            { Value: tariff_ID,   Label: 'Tarif' },
            { Value: status,      Label: 'Status' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Session', Target: '@UI.FieldGroup#General' }
    ]
);

// --- RESERVATIONS ---
annotate KameraAnbindungService.Reservations with @(
    Capabilities: {
        InsertRestrictions: { Insertable: true },
        DeleteRestrictions: { Deletable:  true },
        UpdateRestrictions: { Updatable:  true }
    },

    UI.LineItem: [
        { Value: startTime,   Label: 'Von' },
        { Value: endTime,     Label: 'Bis' },
        { Value: vehicle_ID,  Label: 'Fahrzeug' },
        { Value: tariff.name, Label: 'Tarif' },
        { Value: status,      Label: 'Status' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: startTime,   Label: 'Von' },
            { Value: endTime,     Label: 'Bis' },
            { Value: vehicle_ID,  Label: 'Fahrzeug' },
            { Value: tariff.name, Label: 'Tarif' },
            { Value: status,      Label: 'Status' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Reservierung', Target: '@UI.FieldGroup#General' }
    ]
);
// Status immer read-only – wird per Logik gesetzt (ausstehend → bestätigt/abgelehnt)
annotate KameraAnbindungService.Reservations:status with @(
    UI.ReadOnly: true
);

// Fahrzeug-Auswahlliste: zeigt Kennzeichen statt GUID
annotate KameraAnbindungService.Reservations:vehicle with @(
    Common.Text            : vehicle.licencePlate,
    Common.TextArrangement : #TextOnly,
    Common.ValueList : {
        $Type          : 'Common.ValueListType',
        CollectionPath : 'Vehicles',
        Parameters     : [
            {
                $Type             : 'Common.ValueListParameterOut',
                LocalDataProperty : vehicle_ID,
                ValueListProperty : 'ID'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'licencePlate'
            }
        ]
    },
    Common.ValueListWithFixedValues: false
);

// Tarif-Auswahlliste: zeigt Name + Preis
annotate KameraAnbindungService.Reservations:tariff with @(
    Common.Text            : tariff.name,
    Common.TextArrangement : #TextOnly,
    Common.ValueList : {
        $Type          : 'Common.ValueListType',
        CollectionPath : 'Tariffs',
        Parameters     : [
            {
                $Type             : 'Common.ValueListParameterOut',
                LocalDataProperty : tariff_ID,
                ValueListProperty : 'ID'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'name'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'price'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'unit'
            }
        ]
    },
    Common.ValueListWithFixedValues: false
);

// --- TARIFFS ---
annotate KameraAnbindungService.Tariffs with @(
    Capabilities.InsertRestrictions: { Insertable: true },

    UI.LineItem: [
        { Value: name,  Label: 'Name' },
        { Value: price, Label: 'Preis' },
        { Value: unit,  Label: 'Einheit' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: name,  Label: 'Name' },
            { Value: price, Label: 'Preis' },
            { Value: unit,  Label: 'Einheit' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Tarif', Target: '@UI.FieldGroup#General' }
    ]
);

// --- ACCESS LOGS ---
// Read-only – wird nur vom System geschrieben, nicht vom User
annotate KameraAnbindungService.AccessLogs with @(
    Capabilities: {
        InsertRestrictions: { Insertable: false },
        DeleteRestrictions: { Deletable:  false },
        UpdateRestrictions: { Updatable:  false }
    },

    UI.LineItem: [
        { Value: role,       Label: 'Rolle' },
        { Value: action,     Label: 'Aktion' },
        { Value: entityName, Label: 'Entity' },
        { Value: user_ID,    Label: 'Benutzer' }
    ],

    UI.FieldGroup #General: {
        Data: [
            { Value: role,       Label: 'Rolle' },
            { Value: action,     Label: 'Aktion' },
            { Value: entityName, Label: 'Entity' },
            { Value: user_ID,    Label: 'Benutzer' }
        ]
    },

    UI.Facets: [
        { $Type: 'UI.ReferenceFacet', Label: 'Log', Target: '@UI.FieldGroup#General' }
    ]
);
// ---------- ZUSATZ-ANNOTATIONEN -------------
annotate KameraAnbindungService.Reservations with {
    tariff_ID @UI.Hidden;
};

annotate KameraAnbindungService.Reservations:status with @(
    UI.ReadOnly: true
);

annotate KameraAnbindungService.Reservations:tariff with @(
    UI.ReadOnly: true,
    Common.Text            : tariff.name,
    Common.TextArrangement : #TextOnly
);