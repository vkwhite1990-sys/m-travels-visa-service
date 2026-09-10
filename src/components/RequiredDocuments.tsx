import React from 'react';
import { FileText, Download, Upload, CheckCircle } from 'lucide-react';

export interface RequiredDocument {
  id: string;
  name: string;
  category: string;
  description: string;
  required: boolean;
  template?: string;
  tips: string[];
}

interface RequiredDocumentsProps {
  documents: RequiredDocument[];
  onDownloadTemplate?: (documentId: string) => void;
  onUploadDocument?: (documentId: string) => void;
}

const RequiredDocuments: React.FC<RequiredDocumentsProps> = ({
  documents,
  onDownloadTemplate,
  onUploadDocument,
}) => {
  const groupedByCategory = documents.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = [];
      }
      acc[doc.category].push(doc);
      return acc;
    },
    {} as Record<string, RequiredDocument[]>
  );

  return (
    <div className="space-y-6">
      {Object.entries(groupedByCategory).map(([category, docs]) => (
        <div key={category} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-4">
            <h3 className="text-white font-bold text-lg">{category}</h3>
          </div>
          <div className="p-6 space-y-4">
            {docs.map((doc) => (
              <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <FileText className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-gray-900">{doc.name}</h4>
                        {doc.required ? (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-semibold">
                            Required
                          </span>
                        ) : (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                    </div>
                  </div>
                </div>

                {doc.tips.length > 0 && (
                  <div className="mb-4 pl-8 space-y-1">
                    {doc.tips.map((tip, tipIndex) => (
                      <p key={tipIndex} className="text-xs text-gray-500">
                        💡 {tip}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                  {doc.template && onDownloadTemplate && (
                    <button
                      onClick={() => onDownloadTemplate(doc.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Template</span>
                    </button>
                  )}
                  {onUploadDocument && (
                    <button
                      onClick={() => onUploadDocument(doc.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload Document</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequiredDocuments;
