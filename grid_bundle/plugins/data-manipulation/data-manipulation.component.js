"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const index_1 = require("../../infrastructure/component/index");
const plugin_component_1 = require("../plugin.component");
const command_1 = require("ng2-qgrid/core/command");
const action_1 = require("ng2-qgrid/core/action");
const infrastructure_1 = require("ng2-qgrid/core/infrastructure");
const utility_1 = require("ng2-qgrid/core/utility");
class DataManipulationComponent extends plugin_component_1.PluginComponent {
    constructor(root) {
        super(root);
        this.commitCommand = new command_1.Command({
            execute: e => {
                if (e.column.class !== 'data') {
                    return;
                }
                const rowId = this.rowId(e.row);
                const edited = this.changes.edited;
                let entries = edited.get(rowId);
                if (!entries) {
                    entries = [];
                    edited.set(rowId, entries);
                }
                let entryIndex = entries.findIndex(item => item.column === item.column.key);
                let entry = entries[entryIndex];
                if (!entry) {
                    entry = {
                        column: e.column.key,
                        oldValue: e.oldValue,
                        oldLabel: e.oldLabel
                    };
                    entryIndex = entries.length;
                    entries.push(entry);
                }
                entry.newValue = e.newValue;
                entry.newLabel = e.newLabel;
                // TODO: understand if we need to track label changes?
                if (!this.hasChanges(entry.newValue, entry.oldValue)) {
                    entries.splice(entryIndex, 1);
                    if (!entries.length) {
                        edited.delete(rowId);
                    }
                }
            }
        });
        this.actions = [
            new action_1.Action(new command_1.Command({
                execute: () => {
                    const newRow = this.rowFactory(this.model.data().rows[0]);
                    if (utility_1.isUndefined(newRow)) {
                        throw new infrastructure_1.AppError('data.manipulation', 'Setup rowFactory property to add new rows');
                    }
                    const rowId = this.rowId(newRow);
                    const data = this.model.data;
                    this.changes.added.add(rowId);
                    data({
                        rows: [newRow].concat(data().rows)
                    });
                },
                shortcut: 'F7'
            }), 'Add New Row', 'add')
        ];
        this.rowActions = [
            new action_1.Action(new command_1.Command({
                canExecute: e => {
                    const rowId = this.rowId(e.row);
                    return !this.changes.deleted.has(rowId);
                },
                execute: e => {
                    const rowId = this.rowId(e.row);
                    const changes = this.changes;
                    if (changes.added.has(rowId)) {
                        changes.added.delete(rowId);
                        const data = this.model.data;
                        const rows = data().rows.filter(row => this.rowId(row) !== rowId);
                        data({ rows });
                    }
                    else {
                        changes.deleted.add(rowId);
                    }
                }
            }), 'Delete Row', 'delete'),
            new action_1.Action(new command_1.Command({
                execute: e => {
                    const rowId = this.rowId(e.row);
                    this.changes.deleted.delete(rowId);
                },
                canExecute: e => {
                    const rowId = this.rowId(e.row);
                    return this.changes.deleted.has(rowId);
                }
            }), 'Restore', 'restore')
            // new Action(
            // 	new Command({i
            // 		execute: () => {
            // 			// TODO make edit form service
            // 		}
            // 	}),
            // 	'Edit Form',
            // 	'edit'
            // )
        ];
    }
    ngOnInit() {
        const model = this.model;
        this.rowId = model.dataManipulation().rowId;
        this.rowFactory = model.dataManipulation().rowFactory;
        model
            .edit({
            mode: 'cell',
            commit: this.commitCommand
        })
            .style({
            row: this.styleRow.bind(this),
            cell: this.styleCell.bind(this)
        })
            .action({
            items: this.actions
        });
        model.dataChanged.watch((e, off) => {
            if (e.hasChanges('columns')) {
                const rowOptionsColumn = model
                    .data()
                    .columns.find(column => column.type === 'row-options');
                if (rowOptionsColumn) {
                    rowOptionsColumn.editorOptions.actions.push(...this.rowActions);
                    off();
                }
            }
        });
    }
    hasChanges(newValue, oldValue) {
        // TODO: understand if we need to parse values (e.g. '12' vs 12)
        return newValue !== oldValue;
    }
    styleRow(row, context) {
        const rowId = this.rowId(row);
        if (this.changes.deleted.has(rowId)) {
            context.class('deleted', { opacity: 0.3 });
        }
    }
    styleCell(row, column, context) {
        const rowId = this.rowId(row);
        const changes = this.changes;
        if (column.type === 'row-indicator') {
            if (changes.deleted.has(rowId)) {
                context.class('delete-indicator', { background: '#EF5350' });
            }
            else if (changes.added.has(rowId)) {
                context.class('add-indicator', { background: '#C8E6C9' });
            }
            else if (changes.edited.has(rowId)) {
                context.class('edit-indicator', { background: '#E3F2FD' });
            }
            return;
        }
        if (changes.edited.has(rowId)) {
            const entries = changes.edited.get(rowId);
            if (entries.findIndex(entry => entry.column === column.key) >= 0) {
                context.class('edited', { background: '#E3F2FD' });
            }
        }
    }
    get changes() {
        const model = this.model;
        return model.dataManipulation();
    }
}
DataManipulationComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'q-grid-data-manipulation',
                template: ''
            },] },
];
/** @nocollapse */
DataManipulationComponent.ctorParameters = () => [
    { type: index_1.RootService, decorators: [{ type: core_1.Optional },] },
];
exports.DataManipulationComponent = DataManipulationComponent;
//# sourceMappingURL=data-manipulation.component.js.map