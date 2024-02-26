// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tiny edu-sharing plugin for Moodle.
 *
 * @module      tiny_edusharing/repository
 * @copyright   2024 metaVentis GmbH <http://metaventis.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {call as fetchMany} from 'core/ajax';

export const addEduSharingInstance = args => fetchMany([{
    methodname: 'mod_edusharing_add_instance',
    args: args
}])[0];

export const getTicket = args => fetchMany([{
    methodname: 'mod_edusharing_get_ticket',
    args: args
}])[0];

export const deleteEduSharingInstance = args => fetchMany([{
    methodname: 'mod_edusharing_delete_instance',
    args: args
}])[0];

export const updateInstance = args => fetchMany([{
    methodname: 'mod_edusharing_update_instance',
    args: args
}])[0];