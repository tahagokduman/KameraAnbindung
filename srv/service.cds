using { KameraAnbindung as my } from '../db/schema';

@path : '/service/KameraAnbindungService'
service KameraAnbindungService
{
    @odata.draft.enabled
    entity Users        as projection on my.Users;

    entity Vehicles     as projection on my.Vehicles;

    entity Reservations as projection on my.Reservations;

    entity AccessLogs   as projection on my.AccessLogs;

    @odata.draft.enabled
    entity Company      as projection on my.Company;

    @odata.draft.enabled
    entity Cameras      as projection on my.Cameras;

    @odata.draft.enabled
    entity CameraEvents as projection on my.CameraEvents;

    @odata.draft.enabled
    entity Session      as projection on my.Session;

    @odata.draft.enabled
    entity Tariffs      as projection on my.Tariffs;

    action processEvent(eventId : UUID) returns String;
}

annotate KameraAnbindungService with @requires : ['authenticated-user'];
