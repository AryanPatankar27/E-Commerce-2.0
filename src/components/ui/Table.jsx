// src/components/ui/table.jsx
import React from 'react';

export const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <thead className="bg-gray-200">
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }) => {
  return <tr className="border-b">{children}</tr>;
};

export const TableCell = ({ children, className }) => {
  return (
    <td className={`px-4 py-2 text-left ${className}`}>
      {children}
    </td>
  );
};

export const TableHead = ({ children }) => {
  return (
    <th className="px-4 py-2 text-left font-bold border-b border-gray-300">
      {children}
    </th>
  );
};

// Exporting combined component
export const TableComponents = {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead, // Export the new TableHead component
};
